// import Link from 'next/link';

interface ListProps {
  name: string,
  href: string,
}

interface Siders {
  list: ListProps[],
  selected: number,
  className?: string | undefined,
  onChange: <ListProps>(val:ListProps, index: number) => void
}

import styles from './home.module.css';

const Siders = ({list, selected, className, onChange}:Siders) => {

  const clickLi = (val:ListProps, index: number):void => {
    if(selected === index) return;
    onChange<ListProps>(val, index);
  }

  return (
    <ul className={`${styles.sliders_ul} ${className}`}>
      {list.map(
        (val,index) =>
        <li
          key={index}
          className={selected === index?styles.activity:''}
          onClick={() => clickLi(val, index)}
        >
          {val.name}
        </li>
      )}
    </ul>
  )
}

export default Siders;