import profile from "../../assets/images/profile.png";
export default function Header() {
  return (
    <div>
      <div className="flex justify-between items-center container mx-auto mt-[50px]">
        <h2 className="text-4xl">Knowledge Cafe</h2>
        <img src={profile} alt="" />
      </div>
      <hr className="mt-12"/>
    </div>
  );
}
