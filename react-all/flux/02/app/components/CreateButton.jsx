import React from 'react';

function CreateButton({ onClick }) {
    return (
        <div className="createButtonComponent">
            <button onClick={ onClick }>创建新的Todo</button>
        </div>
    );
}

export default CreateButton;