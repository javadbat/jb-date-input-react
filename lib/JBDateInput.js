import React, { useEffect, useRef, useState, useImperativeHandle, useCallback } from 'react';
import PropTypes from 'prop-types';
import 'jb-date-input';
import { useEvent } from '../../custom-hooks/UseEvent';
const JBDateInput = React.forwardRef((props, ref) => {
    const element = useRef();
    const [refChangeCount, refChangeCountSetter] = useState(0);
    const onFormatChangeCallBackQueueRef = useRef([]);
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
    },[props.onChange]);
    const onKeyup = useCallback((e) => {
        if (props.onKeyup) {
            props.onKeyup(e);
        }
    },[props.onKeyup]);
    const onSelect = useCallback((e) => {
        if (props.onSelect) {
            props.onSelect(e);
        }
    },[props.onSelect]);
    useEvent(element.current, 'change', onchange, true);
    useEvent(element.current, 'keyup', onKeyup, true);
    useEvent(element.current, 'select', onSelect, true);
    useEffect(() => {
        if (props.format) {
            if(props.format !== element.current.format) {
                element.current.setAttribute('format', props.format);
            }
            if (onFormatChangeCallBackQueueRef.current.length > 0) {
                onFormatChangeCallBackQueueRef.current.forEach((callBack) => {
                    callBack();
                });
                onFormatChangeCallBackQueueRef.current = [];
            }

        }
    }, [props.format]);
    useEffect(() => {
        if (props.max) {
            if (props.format && props.format !== element.current.format) {
                onFormatChangeCallBackQueueRef.current.push(() => {
                    element.current.setAttribute('max', props.max);
                });
            } else {
                element.current.setAttribute('max', props.max);
            }
        }

    }, [props.max]);
    useEffect(() => {
        if (props.min) {
            if (props.format && props.format !== element.current.format) {
                onFormatChangeCallBackQueueRef.current.push(() => {
                    element.current.setAttribute('min', props.min);
                });
            } else {
                element.current.setAttribute('min', props.min);
            }
        }
    }, [props.min]);
    useEffect(() => {
        if (props.value) {
            element.current.value = props.value;
        }
    }, [props.value]);
    useEffect(() => {
        if (Array.isArray(props.validationList)) {
            element.current.validationList = props.validationList;
        }
    }, [props.validationList]);
    useEffect(() => {
        if (props.direction) {
            element.current.setAttribute('direction', props.direction);
        }
    },
    [props.direction]);
    return (
        <jb-date-input label={props.label} value-type={props.valueType ? props.valueType : 'GREGORIAN'} ref={element} input-type={props.inputType ? props.inputType : 'JALALI'}>
            {props.children}
        </jb-date-input>
    );
});
JBDateInput.displayName = "JBDateInput";
JBDateInput.propTypes = {
    label: PropTypes.string,
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
    validationList: PropTypes.array
};
export default JBDateInput;
