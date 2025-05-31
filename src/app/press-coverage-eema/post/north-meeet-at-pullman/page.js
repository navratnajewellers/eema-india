import PostHeader from "@/app/components/press-coverage/PostHeader";
import { Image } from "rsuite";

export default function Post6() {
  const post1imagesData = [
    "/images/press-coverage/posts-gallery/1556278110_Untitled-2.jpg",
    "/images/press-coverage/posts-gallery/1556278124_Untitled-3.jpg",
  ];
  return (
    <>
      <PostHeader
        postHeading="NORTH Meeet - At Pullman"
        postDate="Apr 26, 2019"
      />

      <div className=" flex items-center flex-wrap py-11 mt-11 ">
        {post1imagesData.map((data, index) => (
          <div key={index} className=" ml-7 mb-11 ">
            <Image
              src={data}
              alt={`image-4${index}`}
              height={470}
              width={300}
            />
          </div>
        ))}
      </div>
    </>
  );
}
