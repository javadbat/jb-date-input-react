import React, { useEffect, useRef, useState, useImperativeHandle, useCallback, MutableRefObject, RefObject, ReactNode, forwardRef, DetailedHTMLProps, HTMLAttributes } from 'react';
import 'jb-date-input';
// eslint-disable-next-line no-duplicate-imports
import { JBDateInputWebComponent,type ValidationValue, type JBDateInputValueObject, type InputType } from 'jb-date-input';
import { type ValidationItem } from 'jb-validation';
import { useEvent } from '../../../common/hooks/use-event.js';
// re-export imported types for easier use for user
export {type JBDateInputValueObject, type ValidationItem, type ValidationValue, InputType };
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'jb-date-input': JBDateInputType;
    }
    interface JBDateInputType extends DetailedHTMLProps<HTMLAttributes<JBDateInputWebComponent>, JBDateInputWebComponent> {
      class?: string,
      label?: string,
      name?: string,
      "value-type"?: string,
      "input-type"?: string,
      // ref:React.RefObject<JBDateInputWebComponent>,
    }
  }
}
export type JBDateInputEventType<T> = T & {
  target: JBDateInputWebComponent
}
export type JBDateInputProps = {
  label?: string,
  style?: string,
  name?: string,
  min?: string | null | undefined | Date,
  max?: string | null | undefined | Date,
  message?: string | null | undefined,
  format?: string,
  className?: string,
  onKeyup?: (e: JBDateInputEventType<KeyboardEvent>) => void,
  onChange?: (e: JBDateInputEventType<Event>) => void,
  onSelect?: (e: JBDateInputEventType<CustomEvent>) => void,
  valueType?: 'GREGORIAN' | 'JALALI' | 'TIME_STAMP',
  inputType?: 'GREGORIAN' | 'JALALI',
  direction?: 'ltr' | 'rtl',
  value?: string | Date | null | undefined,
  validationList?: ValidationItem<ValidationValue>[],
  required?: boolean,
  calendarDefaultDateView?: { year: number, month: number, dateType?: InputType },
  showPersianNumber?: boolean,
  placeholder?: string | null | undefined,
  jalaliMonthList?: string[] | null | undefined,
  gregorianMonthList?: string[] | null | undefined,
  overflowHandler?:"NONE" | "SLIDE",
  overflowRef?:RefObject<HTMLElement> | null | MutableRefObject<HTMLElement | undefined>,
  children?: ReactNode | ReactNode[],
}

export const JBDateInput = forwardRef((props: JBDateInputProps, ref) => {
  const element = useRef<JBDateInputWebComponent>(null);
  const [refChangeCount, refChangeCountSetter] = useState(0);
  const onFormatChangeCallBackQueueRef = useRef<(() => void)[]>([]);
  useImperativeHandle(
    ref,
    () => (element ? element.current : {}),
    [element],
  );
  useEffect(() => {
    refChangeCountSetter(refChangeCount + 1);
  }, [element.current]);
  const onchange = useCallback((e: JBDateInputEventType<Event>) => {
    if (props.onChange) {
      props.onChange(e);
    }
  }, [props.onChange]);
  const onKeyup = useCallback((e: JBDateInputEventType<KeyboardEvent>) => {
    if (props.onKeyup) {
      props.onKeyup(e);
    }
  }, [props.onKeyup]);
  const onSelect = useCallback((e: JBDateInputEventType<CustomEvent>) => {
    if (props.onSelect) {
      props.onSelect(e);
    }
  }, [props.onSelect]);
  useEvent(element.current, 'change', onchange, true);
  useEvent(element.current, 'keyup', onKeyup, true);
  useEvent(element.current, 'select', onSelect, true);
  useEffect(() => {
    if (props.format) {
      if (props.format !== element.current?.valueFormat) {
        element.current?.setAttribute('format', props.format);
      }
      if (onFormatChangeCallBackQueueRef.current.length > 0) {
        onFormatChangeCallBackQueueRef.current.forEach((callBack: () => void) => {
          callBack();
        });
        onFormatChangeCallBackQueueRef.current = [];
      }

    }
  }, [props.format]);
  useEffect(() => {
    if (props.max) {
      if (props.format && props.format !== element.current?.valueFormat) {
        onFormatChangeCallBackQueueRef.current.push(() => {
          if (props.max) { element.current?.setMaxDate(props.max); }
        });
      } else {
        element.current?.setMaxDate(props.max);
      }
    }

  }, [props.max]);
  useEffect(() => {
    if (props.min) {
      if (props.format && props.format !== element.current?.valueFormat) {
        onFormatChangeCallBackQueueRef.current.push(() => {
          props.min && element.current?.setMinDate(props.min);
        });
      } else {
        element.current?.setMinDate(props.min);
      }
    }
  }, [props.min]);
  useEffect(() => {
    if (element.current && props.value) {
      element.current.value = props.value;
    }
  }, [props.value]);
  useEffect(() => {
    if (element.current) {
      element.current.setAttribute("message",props.message || "");
    }
  }, [props.message]);
  useEffect(() => {
    if (element.current && Array.isArray(props.jalaliMonthList)) {
      element.current.setMonthList("JALALI", props.jalaliMonthList);
    }
  }, [props.jalaliMonthList]);
  useEffect(() => {
    if (element.current && Array.isArray(props.gregorianMonthList)) {
      element.current.setMonthList("GREGORIAN", props.gregorianMonthList);
    }
  }, [props.gregorianMonthList]);
  useEffect(() => {
    if (element.current && props.placeholder !== undefined) {
      element.current.placeholder = props.placeholder;
    }
  }, [props.placeholder]);
  useEffect(() => {
    if (element.current && props.overflowHandler !== undefined) {
      element.current.elements.popover.overflowHandler = props.overflowHandler;
    }
  }, [props.overflowHandler]);
  useEffect(() => {
    if (element.current && props.overflowRef !== undefined) {
      element.current.elements.popover.overflowDom = props.overflowRef.current;
    }
  }, [props.overflowRef]);
  useEffect(() => {
    if (element.current) {
      if (typeof props.style == "string") {
        element.current.setAttribute("style", props.style);
      }
    }
  }, [props.style]);
  useEffect(() => {
    if (element.current && Array.isArray(props.validationList)) {
      element.current.validation.list = props.validationList;
    }
  }, [props.validationList]);
  useEffect(() => {
    if (element.current && props.direction) {
      element.current.setAttribute('direction', props.direction);
    }
  }, [props.direction]);
  useEffect(() => {
    if (element.current) {
      if (props.required) {
        element.current.required = true;
      } else {
        element.current.required = false;
      }
    }

  }, [props.required,element.current]);
  useEffect(() => {
    if (typeof props.calendarDefaultDateView == "object" && props.calendarDefaultDateView.year && props.calendarDefaultDateView.month) {
      element.current?.setCalendarDefaultDateView(props.calendarDefaultDateView.year, props.calendarDefaultDateView.month, props.calendarDefaultDateView.dateType);
    }
  }, [props.calendarDefaultDateView]);
  useEffect(() => {
    if (props.showPersianNumber) {
      element.current?.setAttribute('show-persian-number', 'true');
    } else {
      element.current?.removeAttribute('show-persian-number');
    }
  }, [props.showPersianNumber]);
  return (
    <jb-date-input class={props.className ? props.className : ""} name={props.name} label={props.label} value-type={props.valueType ? props.valueType : 'GREGORIAN'} ref={element} input-type={props.inputType ? props.inputType : 'JALALI'}>
      {props.children}
    </jb-date-input>
  );
});
JBDateInput.displayName = "JBDateInput";
