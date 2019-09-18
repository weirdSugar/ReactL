import {creatStore} from 'redux';
import reducer from './reducer'

let store=creatStore(reducer)
export default store