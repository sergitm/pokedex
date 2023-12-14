import './TypeFilter.css';

export default function TypeFilter(props) {
    const typeNameF = props.type.name.charAt(0).toUpperCase() + props.type.name.slice(1);
    const imgUrl = `./src/assets/types-img/Battrio_${typeNameF}_type.png`;

    return (
    <>
        <input type="radio" className="btn-check" name="types" id={props.type.name} autoComplete="off" />
        <label className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'secondary'} text-white btn-type`} htmlFor={props.type.name} title={typeNameF}>
            <img src={imgUrl} alt={typeNameF} style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
        </label>
    </>);
}