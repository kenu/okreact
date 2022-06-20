import ListComp from "../components/ListComp";

function Contact() {
  const list = [1, 2, 3];
  return (
    <div>
      <h1>Contact</h1>
      <ul>
        {list.map((item, index) => (
          <ListComp item={item} idx={index}></ListComp>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
