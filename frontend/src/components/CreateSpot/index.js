import { useState } from "react";
import { createSpot } from "../store/spot";
import { useDispatch, useSelector } from "react-redux";
import 'CreateSpot.css';

const CreateSpot = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [ecoFeatures, setEcoFeatures] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState(00000);
  const [country, setCountry] = useState("");
  const [ownerId, setOwnerId] = useState(null);
  const [image, setImage] = useState("");
  // for multuple file upload
  //   const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    setOwnerId(user.id);
    dispatch(createSpot({ title, price, ecoFeatures, image, description, address, city, state, zip, country, ownerId }))
      .then(() => {
        setTitle("");
        setPrice(0);
        setEcoFeatures("");
        setDescription(null);
        setAddress("");
        setCity("");
        setState("");
        setZip("");
        setCountry("");
        setOwnerId(null);
        setImage("");
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          newErrors = data.errors;
          setErrors(newErrors);
        }
      });
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  // for multiple file upload
  //   const updateFiles = (e) => {
  //     const files = e.target.files;
  //     setImages(files);
  //   };

  return (
    <div>
      <h1>Host a Spot</h1>
      {errors.length > 0 &&
        errors.map((error) => <div key={error}>{error}</div>)}
      <form
        style={{ display: "flex", flexFlow: "column" }}
        onSubmit={handleSubmit}
      >
        <label>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="100"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Eco Features"
            value={ecoFeatures}
            onChange={(e) => setEcoFeatures(e.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="1234 N Adventure Ave"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Zip Code"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <label>
          <input type="file" onChange={updateFile} />
        </label>
        {/* <label>
            Multiple Upload
            <input 
              type="file"
              multiple
              onChange={updateFiles} />
          </label> */}
        <button type="submit">Create Spot</button>
      </form>
      {/* <div>
        {user && (
          <div>
            <h1>{user.username}</h1>
            <img
              style={{ width: "150px" }}
              src={user.profileImageUrl}
              alt="profile"
            />
          </div>
        )}
      </div> */}
    </div>
  );
};

export default CreateSpot;