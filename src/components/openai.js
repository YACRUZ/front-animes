import { useState } from "react";
import ServiceDavinci003 from "../services/service.davinci-003";
import ServiceImg from "../services/service.images";
import ServiceEmo from "../services/service.emoji";
import ServiceTra from "../services/service.traductor";
import ServiceList from "../services/service.list";
import ServiceClas from "../services/service.clasification";
import { useTranslation } from "react-i18next";
import { useQuery, gql } from "@apollo/client";
import SavePrompt from "../components/saveprompt";

const FEED_QUERY = gql`
    query{
        me{
            username
        }
    }
`;

export default function OpenAI() {
    const { t } = useTranslation();
    const { data: { me } = {} } = useQuery(FEED_QUERY);
    const user = me?.username;

    const [animalInputText, setAnimalInputText] = useState("");
    const [resultext, setResultext] = useState();

    const [animalInputImg, setAnimalInputImg] = useState("");
    const [resultimg, setResultimg] = useState();
    const [numberOfImages, setNumberOfImages] = useState(1)

    const [animalInputEmo, setAnimalInputEmo] = useState("");
    const [resultemo, setResultemo] = useState();

    const [animalInputTra, setAnimalInputTra] = useState("");
    const [resultra, setResultra] = useState();

    const [animalInputLis, setAnimalInputLis] = useState("");
    const [resullis, setResullis] = useState();

    const [animalInputClas, setAnimalInputClas] = useState("");
    const [resultclas, setResultclas] = useState();

    const [selectedService, setSelectedService] = useState(null);

    async function onSubmitext(event) {
        event.preventDefault();
        try {
            const response = await ServiceDavinci003.getDaVinci({ animal: animalInputText });
            const data = await response;
            console.log(response);
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            console.log("response", response);
            setResultext(data.result);
            //setAnimalInputText("");
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }

    async function onSubmitimg(event) {
        event.preventDefault();
        try {
            const response = await ServiceImg.getImage({ animal: animalInputImg, n: numberOfImages });


            const data = await response;
            console.log(response);
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            console.log("response", response);
            setResultimg(data.result);
            //setAnimalInputImg("");
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }

    async function onSubmitemo(event) {
        event.preventDefault();
        try {
            const response = await ServiceEmo.getDaVinci({ animal: animalInputEmo });
            const data = await response;
            console.log(response);
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            console.log("response", response);
            setResultemo(data.result);
            //setAnimalInputEmo("");
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }

    async function onSubmitra(event) {
        event.preventDefault();
        try {
            const response = await ServiceTra.getTraduccion({ animal: animalInputTra });
            const data = await response;
            console.log(response);
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            console.log("response", response);
            setResultra(data.result);
            //setAnimalInputTra("");
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }

    async function onSubmitlist(event) {
        event.preventDefault();
        try {
            const response = await ServiceList.getDaVinci({ animal: animalInputLis });
            const data = await response;
            console.log(response);
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            console.log("response", response);
            setResullis(data.result);
            //setAnimalInputLis("");
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }

    async function onSubmitclas(event) {
        event.preventDefault();
        try {
            const response = await ServiceClas.getTipo({ animal: animalInputClas });
            const data = await response;
            console.log(response);
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            console.log("response", response);
            setResultclas(data.result);
            //setAnimalInputClas("");
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }

    return (
        <div>
            <button className="pinterest-btn" onClick={() => setSelectedService("image")}>{t("anime image generator")}</button>
            <button className="pinterest-btn" onClick={() => setSelectedService("text")}>{t("generator of characters anime")}</button>
            <button className="pinterest-btn" onClick={() => setSelectedService("emo")}>{t("generator of emojis anime")}</button>
            <button className="pinterest-btn" onClick={() => setSelectedService("tra")}>{t("anime name translator")}</button>
            <button className="pinterest-btn" onClick={() => setSelectedService("list")}>{t("list animes")}</button>
            <button className="pinterest-btn" onClick={() => setSelectedService("clas")}>{t("list of anime genres")}</button>

            {selectedService === "image" && (
                <div>
                    <main>
                        <h3 className="text-center fly">{t("images of animes")}</h3>
                        <form onSubmit={onSubmitimg}>
                            <div className="cont-center">
                                <input
                                    type="text"
                                    name="animal"

                                    placeholder={t("name of anime")}
                                    value={animalInputImg}
                                    onChange={(e) => setAnimalInputImg(e.target.value)}
                                />
                                <input
                                    type="number"
                                    name="number"
                                    placeholder="Enter a number de images"
                                    value={numberOfImages}
                                    onChange={(e) => setNumberOfImages(e.target.value)}
                                />
                            </div>

                            <br />
                            <div className="cont-center">
                                <input type="submit" className=" pinterest-btn pinterest-btn--black" value={t("Generate images")} />
                            </div>
                        </form>
                        <br />
                        <div className="cont-center">
                            {resultimg && resultimg.map((url) => (
                                <img src={url} key={url} alt="Imagen" />
                            ))}
                        </div>
                        {/* <div><img src={result} alt=""></img> </div> */}
                    </main>
                </div>
            )
            }

            {
                selectedService === "emo" && (
                    <div>
                        <main>
                            <h3 className="text-center fly">{t("emojis of animes")}</h3>
                            <form onSubmit={onSubmitemo}>
                                <div className="cont-center">
                                    <input
                                        type="text"
                                        name="animal"
                                        placeholder={t("name of anime")}
                                        value={animalInputEmo}
                                        onChange={(e) => setAnimalInputEmo(e.target.value)}
                                    />
                                </div>
                                <br />
                                <div className="cont-center">
                                    <input type="submit" className="pinterest-btn pinterest-btn--black" value={t("generate emojis")} />
                                </div>
                            </form>
                            <br />
                            <div className="text-center fly">{resultemo}</div>
                            {user && (
                                <SavePrompt
                                    user={user}
                                    model= "text-davinci-003"
                                    prompt={animalInputEmo}
                                    result={resultemo} />
                            )}
                        </main>
                    </div>
                )
            }

            {
                selectedService === "text" && (
                    <div>
                        <main>
                            <h3 className="text-center fly">{t("character of animes")}</h3>
                            <form onSubmit={onSubmitext}>
                                <div className="cont-center">
                                    <input
                                        type="text"
                                        name="animal"
                                        placeholder={t("name of anime")}
                                        value={animalInputText}
                                        onChange={(e) => setAnimalInputText(e.target.value)}
                                    />
                                </div>
                                <br />
                                <div className="cont-center">
                                    <input type="submit" className="pinterest-btn pinterest-btn--black" value={t("generate characters")} />
                                </div>
                            </form>
                            <br />
                            <div className="text-center fly">{resultext}</div>
                            {user && (
                                <SavePrompt
                                    user={user}
                                    model= "text-davinci-003"
                                    prompt={animalInputText}
                                    result={resultext} />
                            )}
                        </main>
                    </div>
                )
            }

            {
                selectedService === "tra" && (
                    <div>
                        <main>
                            <h3 className="text-center fly">{t("name of anime")}</h3>
                            <form onSubmit={onSubmitra}>
                                <div className="cont-center">
                                    <input
                                        type="text"
                                        name="animal"
                                        placeholder={t("name of anime")}
                                        value={animalInputTra}
                                        onChange={(e) => setAnimalInputTra(e.target.value)}
                                    />
                                </div>
                                <br />
                                <div className="cont-center">
                                    <input type="submit" className="pinterest-btn pinterest-btn--black" value={t("translate name")} />
                                </div>
                            </form>
                            <br />
                            <div className="text-center fly">{resultra}</div>
                            {user && (
                                <SavePrompt
                                    user={user}
                                    model= "text-davinci-003"
                                    prompt={animalInputTra}
                                    result={resultra} />
                            )}
                        </main>
                    </div>
                )
            }

            {
                selectedService === "list" && (
                    <div>
                        <main>
                            <h3 className="text-center fly">{t("anime of the genre")}</h3>
                            <form onSubmit={onSubmitlist}>
                                <div className="cont-center">
                                    <input
                                        type="text"
                                        name="animal"
                                        placeholder={t("gender of anime")}
                                        value={animalInputLis}
                                        onChange={(e) => setAnimalInputLis(e.target.value)}
                                    />
                                </div>
                                <br />
                                <div className="cont-center">
                                    <input type="submit" className="pinterest-btn pinterest-btn--black" value={t("generate animes")} />
                                </div>
                            </form>
                            <br />
                            <div className="text-center fly">{resullis}</div>
                            {user && (
                                <SavePrompt
                                    user={user}
                                    model= "text-davinci-003"
                                    prompt={animalInputLis}
                                    result={resullis} />
                            )}
                        </main>
                    </div>
                )
            }

            {
                selectedService === "clas" && (
                    <div>
                        <main>
                            <h3 className="text-center fly">{t("gender of anime")}</h3>
                            <form onSubmit={onSubmitclas}>
                                <div className="cont-center">
                                    <input
                                        type="text"
                                        name="animal"
                                        placeholder={t("name of anime")}
                                        value={animalInputClas}
                                        onChange={(e) => setAnimalInputClas(e.target.value)}
                                    />
                                </div>
                                <br />
                                <div className="cont-center">
                                    <input type="submit" className="pinterest-btn pinterest-btn--black" value={t("generate genres")} />
                                </div>
                            </form>
                            <br />
                            <div className="text-center fly">{resultclas}</div>
                            {user && (
                                <SavePrompt
                                    user={user}
                                    model= "text-davinci-003"
                                    prompt={animalInputClas}
                                    result={resultclas} />
                            )}
                        </main>
                    </div>
                )
            }
        </div >


    )
}