import { useRef } from "react";

const setCursorPosition = (pos, elem) => {
    elem.focus();
    
    if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
        let range = elem.createTextRange();

        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};

const createMask = (elem, event) => {
    let matrix = '+38-0__-___-__-__',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = elem.value.replace(/\D/g, '');

    if (def.length >= val.length) {
        val = def;
    }

    elem.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {
        if (elem.value.length == 2) {
            elem.value = '';
        }
    } else {
        setCursorPosition(elem.value.length, elem);
    }
}

const FormControls = ({meta, input, children, ...props}) => {
    //const hasError = meta.touched && meta.error
    //{hasError && <span>{meta.error}</span>}
    return(
        <div>
            <div>
                {children}
            </div>
            
        </div>
    )
}

export const Textarea = (props) => {
    const {meta, input, children, ...restProps} = props;
    return <FormControls {...props}><textarea {...input} {...restProps}></textarea></FormControls>
}

export const Input = ({field, form, ...restProps}) => {
    const ref = useRef(null);
    
    return <FormControls><input {...restProps} {...field}
    ref={ref} onInput={ (e) => { createMask(ref.current, e) } } onFocus={ (e) => { createMask(ref.current, e) } } onBlur={ (e) => { createMask(ref.current, e) } }
    /></FormControls>
}