export default function PostHeader({
  postHeading = "This is a heading",
  postDate = "Jan 01, 0001",
}) {
  return (
    <div className=" border-l-4 border-l-orange-600 pl-4 mb-7 ">
      <h2 className=" text-4xl text-black font-bold mb-4 ">{postHeading}</h2>
      <p className=" text-sm leading-relaxed text-orange-600 font-semibold ">
        {postDate}
      </p>
    </div>
  );
}
