import css from "./FriendListItem.module.css";

const online = "Online";
const offline = "Offline";

const FriendListItem = ({ img, name, isOnline = offline }) => {
  return (
    <>
      <div className={css.item}>
        <img src={img} alt="Avatar" width="48" />
        <p>{name}</p>
        {isOnline ? <p>{online}</p> : <p className={css.off}>{offline}</p>}
      </div>
    </>
  );
};

export default FriendListItem;
