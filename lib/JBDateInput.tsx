import React, { useEffect, useRef, useState, useImperativeHandle, useCallback, DOMAttributes } from 'react';
import PropTypes from 'prop-types';
// import {type} from 'jb-date-input';
import 'jb-date-input';
// eslint-disable-next-line no-duplicate-imports
import { JBDateInputWebComponent, JBDateInputInputTypes, JBDateInputValidationItem, JBDDateInputInboxElementWebComponent,JBDateInputValueObject } from 'jb-date-input';
import { useEvent } from '../../custom-hooks/UseEvent';

export {JBDateInputInputTypes,JBDateInputValueObject};
type CustomEvents<K extends string> = { [key in K] : (event: CustomEvent) => void };

type CustomElement<T, K extends string> = Partial<T & DOMAttributes<T> & { children: any } & CustomEvents<`on${K}`>>;
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
      interface IntrinsicElements {
        'jb-date-input': JBDateInputType,
        'jb-date-input-inbox-element':CustomElement<JBDDateInputInboxElementWebComponent,'Click'>
      }
      interface JBDateInputType extends React.DetailedHTMLProps<React.HTMLAttributes<JBDateInputWebComponent>, JBDateInputWebComponent> {
        class?:string,
        label?: string,
        "value-type"?: string,
        "input-type"?:string,
        // ref:React.RefObject<JBDateInputWebComponent>,
      }
    }
}
export type JBDateInputProps = {
    label?: string,
    min?: string,
    max?: string,
    format?: string,
    className?:string,
    onKeyup?: (e:KeyboardEvent)=>void,
    onChange?: (e:Event)=>void,
    onSelect?: (e:CustomEvent)=>void,
    valueType?: 'GREGORIAN'|'JALALI'|'TIME_STAMP',
    inputType?: 'GREGORIAN'|'JALALI',
    direction?: 'ltr'|'rtl',
    value?: string,
    validationList?: JBDateInputValidationItem[],
    required?: boolean,
    calendarDefaultDateView?:{ year:number, month: number, dateType:JBDateInputInputTypes},
    usePersianNumber?: boolean,
    children:any,
}

const JBDateInput = React.forwardRef((props: JBDateInputProps, ref) => {
    const element = useRef<JBDateInputWebComponent>(null);
    const [refChangeCount, refChangeCountSetter] = useState(0);
    const onFormatChangeCallBackQueueRef = useRef<(()=>void)[]>([]);
    useImperativeHandle(
        ref,
        () => (element ? element.current : {}),
        [element],
    );
    useEffect(() => {
        refChangeCountSetter(refChangeCount + 1);
    }, [element.current]);
    const onchange = useCallback((e) => {
        if (props.onChange) {
            props.onChange(e);
        }
    }, [props.onChange]);
    const onKeyup = useCallback((e) => {
        if (props.onKeyup) {
            props.onKeyup(e);
        }
    }, [props.onKeyup]);
    const onSelect = useCallback((e) => {
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
                onFormatChangeCallBackQueueRef.current.forEach((callBack:()=>void) => {
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
                    if(props.max){element.current?.setAttribute('max', props.max);}
                });
            } else {
                element.current?.setAttribute('max', props.max);
            }
        }

    }, [props.max]);
    useEffect(() => {
        if (props.min) {
            if (props.format && props.format !== element.current?.valueFormat) {
                onFormatChangeCallBackQueueRef.current.push(() => {
                    props.min && element.current?.setAttribute('min', props.min);
                });
            } else {
                element.current?.setAttribute('min', props.min);
            }
        }
    }, [props.min]);
    useEffect(() => {
        if (element.current && props.value) {
            element.current.value = props.value;
        }
    }, [props.value]);
    useEffect(() => {
        if (element.current && Array.isArray(props.validationList)) {
            element.current.validationList = props.validationList;
        }
    }, [props.validationList]);
    useEffect(() => {
        if (element.current && props.direction) {
            element.current.setAttribute('direction', props.direction);
        }
    },[props.direction]);
    useEffect(() => {
        if (props.required) {
            element.current?.setAttribute('required', "true");
        } else {
            element.current?.removeAttribute('required');
        }
    }, [props.required]);
    useEffect(() => {
        if (typeof props.calendarDefaultDateView == "object" && props.calendarDefaultDateView.year && props.calendarDefaultDateView.month) {
            element.current?.setCalendarDefaultDateView(props.calendarDefaultDateView.year, props.calendarDefaultDateView.month, props.calendarDefaultDateView.dateType);
        }
    }, [props.calendarDefaultDateView]);
    useEffect(() => {
        if (props.usePersianNumber) {
            element.current?.setAttribute('use-persian-number', 'true');
        } else {
            element.current?.removeAttribute('use-persian-number');
        }
    }, [props.usePersianNumber]);
    return (
        <jb-date-input class={props.className ? props.className : ""} label={props.label} value-type={props.valueType ? props.valueType : 'GREGORIAN'} ref={element} input-type={props.inputType ? props.inputType : 'JALALI'}>
            {props.children}
        </jb-date-input>
    );
});
JBDateInput.displayName = "JBDateInput";
JBDateInput.propTypes = {
    label: PropTypes.string,
    className:PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
    format: PropTypes.string,
    onKeyup: PropTypes.func,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    valueType: PropTypes.oneOf(['GREGORIAN', 'JALALI', 'TIME_STAMP']),
    inputType: PropTypes.oneOf(['GREGORIAN', 'JALALI']),
    direction: PropTypes.oneOf(['ltr', 'rtl']),
    value: PropTypes.string,
    validationList: PropTypes.array,
    required: PropTypes.bool,
    calendarDefaultDateView: PropTypes.shape({ year: PropTypes.number.isRequired, month: PropTypes.number.isRequired, dateType: PropTypes.oneOf<JBDateInputInputTypes>([JBDateInputInputTypes.gregorian, JBDateInputInputTypes.jalali]).isRequired }),
    // calendarDefaultDateView: PropTypes.object,
    usePersianNumber: PropTypes.bool,
    // children:PropTypes.element
};

export {JBDateInput};
