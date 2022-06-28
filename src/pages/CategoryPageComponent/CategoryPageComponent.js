/*eslint-disable */
//category page component
/*eslint-disable */
import React, { useState} from 'react';
import './CategoryPageComponent.scss';
import { addcatagory} from '../../services/AuthService';
import CatagoryList from './CategoryListComponent/CategoryListComponent.js';
import AdminNavComponent from '../../components/AdminNavComponent/AdminNavComponent';
import SearchBarComponent from '../../components/SearchBarComponent/SearchBarComponent';

const CategoryPageComponent=()=> {

  
    const handleCatagorySubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addcatagory({
                name: e.target.catagory.value,
                addedOn: currentDate,
                updatedOn: currentDate,
            });
            setReload(!reload);
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    };
}
export default CategoryPageComponent;
