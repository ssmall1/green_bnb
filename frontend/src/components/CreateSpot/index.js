import { useState, useEffect } from "react";
import * as spotReducer from "../../store/spot";
import { useDispatch, useSelector } from "react-redux";
import './CreateSpot.css';

const CreateSpot = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const spots = useSelector(state => state.spots);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [ecoFeatures, setEcoFeatures] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [ownerId, setOwnerId] = useState(user.id);
  const [image, setImage] = useState("");
  // for multuple file upload
  //   const [images, setImages] = useState([]);
//   const [errors, setErrors] = useState([]);

    useEffect(() => {
        dispatch(spotReducer.getSpots());
    }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const spot = {
        title, price, ecoFeatures, image, description, address, city, state, zip, country, ownerId
    }
    dispatch(spotReducer.createSpot(spot))

    setTitle("");
    setPrice("");
    setEcoFeatures("");
    setDescription("");
    setAddress("");
    setCity("");
    setState("");
    setZip("");
    setCountry("");
    setImage("");
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

  if (!spots) return null;

  return (
    <div className="host-spot-wrapper">
        {/* {errors.length > 0 &&
            errors.map((error) => <div key={error}>{error}</div>)} */}
        <form
            style={{ display: "flex", flexFlow: "column" }}
            onSubmit={handleSubmit}
            id="create-spot-form"
        >
            <div id="host-title">Host a Spot</div>
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
                placeholder="Price"
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
                type="text area"
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
            <input id="file-input" type="file" onChange={updateFile} />
            </label>
            {/* <label>
                Multiple Upload
                <input 
                type="file"
                multiple
                onChange={updateFiles} />
            </label> */}
            <button id="create-spot" type="submit">Create Spot</button>
        </form>

        <img src="https://greenbnb.s3.us-east-2.amazonaws.com/bigsky.jpg" alt="big sky"></img>
    </div>
  );
};

export default CreateSpot;