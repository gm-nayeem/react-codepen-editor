import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';


const Editor = ({ language, displayName, value, onChange }) => {
    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
        onChange(value);
    };

    return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className="editor-title">
                {displayName}
                <button
                    type='button'
                    className='expand-collapse-btn'
                    onClick={() => setOpen(prevOpen => !prevOpen)}
                >
                    <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
                </button>
            </div>
            <CodeMirror
                className='code-mirror-wrapper'
                onBeforeChange={handleChange}
                value={value}
                options={{
                    mode: language,
                    theme: 'material',
                    lineWrapping: true,
                    lint: true,
                    lineNumbers: true,
                }}
            />
        </div>
    )
}

export default Editor;