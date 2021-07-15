import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectDirectorySelections} from '../redux/directory/directorySelector'
import Menuitem from "../menu-item/Menuitem";
import "./Directory.scss";

 const  Directory = ({sections}) =>  {
     
  
        return (
            <div className="directory-menu">
                {
                   
                   sections.map(({id, ...othersectionProps}) => (
                        <Menuitem key={id} {...othersectionProps} />
                    ))

                    
                }
                
            </div>
        )
    }


    const mapStateToProps = createStructuredSelector({
     sections : selectDirectorySelections
    }) 

    



export default connect(mapStateToProps)(Directory);