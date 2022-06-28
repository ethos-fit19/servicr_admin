/*eslint-disable */
import React, { useRef, useEffect, useState} from 'react';
import { FiX } from 'react-icons/fi';
import './EditCategoryComponent.scss';
import { loadCat, editcategory } from '../../../services/AuthService';

const EditCategoryComponent = ({ trigger, settrigger, catagory_id }) => {

    //useStates
    const currentDate = new Date();
    const [category, setCategory] = useState();

    useEffect(() => {
        document.addEventListener('click', handleClickoutside, true)
    }, [])

    const ref = useRef(null)

    const handleClickoutside = (e) => {
        if (!ref.current.contains(e.target)) {
            settrigger(false);
        }
    }

    //useEffects
    useEffect(() => {
        loadCategory();
    }, [catagory_id]);



  
};

export default EditCategoryComponent;







