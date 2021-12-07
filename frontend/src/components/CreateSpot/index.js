import { useState, useEffect } from "react";
import * as spotReducer from "../../store/spot";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import './CreateSpot.css';

const CreateSpot = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const spots = useSelector(state => state.spots);

  const [title, setTitle] = useState("");
  const [priceString, setPriceString] = useState("");
  const [ecoFeatures, setEcoFeatures] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipString, setZipString] = useState("");
  const [country, setCountry] = useState("");
  const [ownerId, setOwnerId] = useState(user.id);
  const [image, setImage] = useState("");
  // for multuple file upload
  //   const [images, setImages] = useState([]);
//   const [errors, setErrors] = useState([]);

    useEffect(() => {
        dispatch(spotReducer.getSpots());
    }, [dispatch]);

    useEffect(() => {
        setTitle(JSON.parse(window.localStorage.getItem('title')));
        setPriceString(JSON.parse(window.localStorage.getItem('priceString')));
        setEcoFeatures(JSON.parse(window.localStorage.getItem('ecoFeatures')));
        setDescription(JSON.parse(window.localStorage.getItem('description')));
        setAddress(JSON.parse(window.localStorage.getItem('address')));
        setCity(JSON.parse(window.localStorage.getItem('city')));
        setState(JSON.parse(window.localStorage.getItem('state')));
        setZipString(JSON.parse(window.localStorage.getItem('zipString')));
        setCountry(JSON.parse(window.localStorage.getItem('country')));
        setImage(JSON.parse(window.localStorage.getItem('image')));
      }, []);
    
      useEffect(() => {
        window.localStorage.setItem('title', JSON.stringify(title));
        window.localStorage.setItem('priceString', JSON.stringify(priceString));
        window.localStorage.setItem('ecoFeatures', JSON.stringify(ecoFeatures));
        window.localStorage.setItem('description', JSON.stringify(description));
        window.localStorage.setItem('address', JSON.stringify(address));
        window.localStorage.setItem('city', JSON.stringify(city));
        window.localStorage.setItem('state', JSON.stringify(state));
        window.localStorage.setItem('zipString', JSON.stringify(zipString));
        window.localStorage.setItem('country', JSON.stringify(country));
        window.localStorage.setItem('image', JSON.stringify(image));
      }, [title, priceString, ecoFeatures, description, address, city, state, zipString, country, image]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const price = parseInt(priceString);
    const zip = parseInt(zipString);
    const spot = {
        title, price, ecoFeatures, image, description, address, city, state, zip, country, ownerId
    }
    const createdSpot = await dispatch(spotReducer.createSpot(spot));

    setTitle("");
    setPriceString("");
    setEcoFeatures("");
    setDescription("");
    setAddress("");
    setCity("");
    setState("");
    setZipString("");
    setCountry("");
    setImage("");
    history.push(`/spots/${createdSpot.id}`);
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

  if (!user) history.push("/welcome");

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
                value={priceString}
                onChange={(e) => setPriceString(e.target.value)}
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
                value={zipString}
                onChange={(e) => setZipString(e.target.value)}
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

        <img id="host-img" src="https://greenbnb.s3.us-east-2.amazonaws.com/bigsky.jpg" alt="big sky"></img>
    </div>
  );
};

export default CreateSpot;