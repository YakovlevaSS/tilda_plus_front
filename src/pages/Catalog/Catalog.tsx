import s from './Catalog.module.css';
import { LookSvg } from '../../components/UI/Icons/Products/Look';
import { EditSvg } from '../../components/UI/Icons/Products/Edit';
import { DeleteSvg } from '../../components/UI/Icons/Products/Delete';


const Catalog = () => (
  <div>
    <h1 className={ s.title }>Товары</h1>
    <LookSvg />
    <EditSvg />
    <DeleteSvg />
  </div>
);

export default Catalog;
