import { useReducer } from 'react';
import { UPDATE_USER, UPDATE_BUSINESS } from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_USER: {
            console.log('UPDATE_USER dispatched')
            
        }
        case UPDATE_BUSINESS: {
            console.log('UPDATE_BUSINESS dispatched')

        }
    }
}