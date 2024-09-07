import { useCallback, useEffect, useState } from "react";
import Loading from "../ui/Loading";
import List from "../ui/List";
import { axiosInstance } from "../../api/axiosInstance";
import Button from "../ui/Button";
import { useProduct } from "../../hooks/useProduct";
const SideBar = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const { filter, setFilter } = useProduct();

  const categoriesCall = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get("/categories");
      setCategories(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [setCategories]);
  useEffect(() => {
    categoriesCall();
  }, [categoriesCall]);

  return (
    <div className="min-w-[263px] border-r-[#E8E8E8] border-r py-10 border-t">
      {loading ? (
        <Loading />
      ) : (
        <List className={"flex-col flex gap-5 font-semibold text-2xl "}>
          {categories.map(({ id, name }) => (
            <li key={id}>
              <Button
                onClick={() => setFilter(name)}
                text={name}
                className={`btn w-[90%] first-letter:capitalize bg-transparent text-[#717171] ${
                  filter === name && "bg-black !text-white"
                }`}
              />
            </li>
          ))}
        </List>
      )}
    </div>
  );
};

export default SideBar;
