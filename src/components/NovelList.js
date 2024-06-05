import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteNovel } from "../config/actions";
import cover from "assets/cover.jpeg";

function NovelList() {
  const novels = useSelector((state) => state.novels);
  console.log(novels);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteNovel({ id: id }));
  };
  return (
    <div>
      <p>
        <Link to="/add-novel">
          <button>Add novel</button>
        </Link>
      </p>
      <br />
      <div className="novels">
        {novels.map((novel, index) => {
          return (
            <>
              <div key={index}>
                <Link to={`/novels/${novel.id}`}>
                  <img src={cover} alt="" className="img" />
                </Link>
                <p>title: {novel.title}</p>
                <div>
                  <Link to={`/update-novel/${novel.id}`}>
                    <button>Update</button>
                  </Link>

                  <button
                    className="button-1"
                    onClick={() => handleDelete(novel.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <br />
            </>
          );
        })}
      </div>
    </div>
  );
}
export default NovelList;
