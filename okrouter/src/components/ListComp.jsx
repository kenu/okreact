function ListComp(props) {
  return (
  <li>
    <a href="">
      {props.item}: {props.idx}
    </a>
  </li>
  );
}

export default ListComp;
