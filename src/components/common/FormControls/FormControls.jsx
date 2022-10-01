import { useRef } from "react";

let setCursorPosition = (pos, elem) => {
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

function createMask(elem, event) {
    console.log(elem);
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

export const Input = (props) => {
    const ref = useRef(null);
    
    return <FormControls><input
    ref={ref} onInput={ (e) => { createMask(ref.current, e) } } onFocus={ (e) => { createMask(ref.current, e) } } onBlur={ (e) => { createMask(ref.current, e) } }
    /></FormControls>
}
//ref={(input) => { this.nameInput = input }}
//return <FormControls {...props}><input {...input} {...restProps}></input></FormControls>

/*
let setCursorPosition = (pos, elem) => {
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

function createMask(event) {
    console.log(event, event.nativeEvent.data);

    event.nativeEvent.data="gdggfgbfxb";
    
    let matrix = '+380-(__)-___-__-__',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = event.nativeEvent.data.replace(/\D/g, '');

    if (def.length >= val.length) {
        val = def;
    }

    event.nativeEvent.data = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {
        if (event.nativeEvent.data.length == 2) {
            event.nativeEvent.data = '';
        }
    } else {
        setCursorPosition(event.nativeEvent.data.length, this);
    }
    
}

function mask(selector) {
    

    const inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    });
  }
*/