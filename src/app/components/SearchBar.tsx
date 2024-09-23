"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    if (name) {
      router.push(`/list?name=${name}`);
    }
  };
  return (
    <form className="flex justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1">
      <input
        name="name"
        type="text"
        placeholder="Recherche"
        className="flex-1 bg-transparent outline-none"
        onSubmit={handleSearch}
      />
      <button className="cursor-pointer">
        <Image src="/search.png" alt="search" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
