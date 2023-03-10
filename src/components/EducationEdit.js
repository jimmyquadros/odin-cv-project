import React, { Component } from 'react';
import ExpandableSection from './ExpandableSection';

class EducationEdit extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = [];
        for (const [key, value] of Object.entries(this.props.editData)) {
            if (value) data.push(value);
        }

        const listItems = data.map((value) =>  
            <li className='deletable-li' 
             key={value.key} 
             onMouseEnter={() => this.props.hover(`#del-${value.key}`)} 
             onMouseLeave={() =>this.props.hover(`#del-${value.key}`)}>
                <div className='edu-edit-area'>
                    <label>
                        INSTITUTION
                        <input 
                         id={`${value.key}-inst`} 
                         name='inst' 
                         type='text' 
                         value={value.inst} 
                         onChange={(e) => this.props.change(e, value.key)} />
                    </label>
                    <label>
                        COURSE OF STUDY
                        <input 
                         id={`${value.key}-study`} 
                         name='study' 
                         type='text' 
                         value={value.study} 
                         onChange={(e) => this.props.change(e, value.key)} />
                    </label>
                    <label>
                        YEAR(S) ATTENDED
                        <input 
                         id={`${value.key}-year`} 
                         name='year' 
                         type='text' 
                         value={value.year} 
                         onChange={(e) => this.props.change(e, value.key)} />
                    </label>
                </div>
                <div id={`del-${value.key}`} 
                 className='del-icon-box hide' 
                 onClick={() => this.props.remove(value.key)}>
                    <svg className='del-icon' viewBox="0 0 24 24" >
                        <path fill="currentColor" d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />
                    </svg>
                </div>
            </li>   
        );
        return (
            <div id='edu' className='section'>
                <h3>EDUCATION</h3>
                <form id='edu-e-form' className="edit-area">
                    <ul>{listItems}</ul>
                    <div className='add-icon-box'>
                        <svg className='add-icon' 
                         xmlns="http://www.w3.org/2000/svg" 
                         viewBox="0 0 24 24" 
                         onClick={() => this.props.add({inst: '', study: '', year: ''})}>
                            <path fill="currentColor" d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                        </svg>
                    </div>
                    <div className='edit-confirm'>
                        <input id='edu-e-submit' type='submit' value='SAVE' onClick={(e) => {
                            this.props.submit(e, 'education', this.props.prepSubmit());
                            this.props.toggle('editEducation')}} />
                        <button id='edu-e-cancel' onClick={() => this.props.toggle('editEducation')}>CANCEL</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ExpandableSection(EducationEdit);