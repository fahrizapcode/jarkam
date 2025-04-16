// import "./profile.scss";

import Button from "@/components/fragments/Button";
import ProfileTitle from "@/components/fragments/ProfileTitle";
import Link from "next/link";

function ProfilePage() {
  return (
    <form>
      <ProfileTitle
        textContent="Informasi Pribadi"
        titleIcon="./icons/user-icon-blue.svg"
      />
      <div className="field">
        <label htmlFor="fullname">
          Nama Lengkap
          <img src="./icons/edit-pencil-icon-blue.svg" alt="edit" />
        </label>
        <input type="text" id="fullname" placeholder="Agus salim" />
      </div>
      <div className="field">
        <label htmlFor="major">
          Jurusan <img src="./icons/edit-pencil-icon-blue.svg" alt="edit" />
        </label>
        <input type="text" id="major" placeholder="Sastra Mesin " />
      </div>
      <div className="field">
        <label htmlFor="cohort">
          Angkatan <img src="./icons/edit-pencil-icon-blue.svg" alt="edit" />
        </label>
        <input type="text" id="cohort" placeholder="2022" />
      </div>
      <div className="field">
        <label htmlFor="nim">
          Nim <img src="./icons/edit-pencil-icon-blue.svg" alt="edit" />
        </label>
        <input type="text" id="nim" placeholder="1234567989" />
      </div>
      <div className="field">
        <label htmlFor="email">
          Email <img src="./icons/edit-pencil-icon-blue.svg" alt="edit" />
        </label>
        <input type="text" id="email" placeholder="example@gmail.com" />
      </div>
      <div className="field">
        <label htmlFor="telephone">
          No Telp <img src="./icons/edit-pencil-icon-blue.svg" alt="edit" />
        </label>
        <input type="text" id="telephone" placeholder="082948929384" />
      </div>
      <div className="field">
        <label htmlFor="bio">
          Bio <img src="./icons/edit-pencil-icon-blue.svg" alt="edit" />
        </label>
        <input
          type="text"
          id="bio"
          placeholder=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          delectus adipisci est? Nemo tempora incidunt odio molestias eius, quae
          maiores?"
        />
      </div>
      <div className="save-button">
        <Link href="/">
          <button>Simpan</button>
        </Link>
      </div>
    </form>
  );
}
export default ProfilePage;
