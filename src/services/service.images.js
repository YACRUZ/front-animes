import { Configuration, OpenAIApi } from "openai";

class CreateImages {

    async getImage(data) {
        const configuration = new Configuration({
            apiKey: "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"
        });

        const openai = new OpenAIApi(configuration);
        console.log(configuration);
        console.log(data.animal);
    if (!configuration.apiKey) {

        return {
            status:500,
            error: {
                message: "OpenAI API key not configured, please follow instructions in README.md",
            }
        };
      }
    
      const animal = data.animal || '';
      const number = Math.floor(data.n) || 1;
      if (animal.trim().length === 0) {

        return {
            status:400,
            error: {
                message: "Please enter a valid animal",
            }
        };
      }
    
      try {
        const completion = await openai.createImage({
          prompt: this.generatePrompt(animal),
          n: number,
          size: "512x512",
        });
        const images =completion.data.data;
        const urls =images.map((image) => image.url);

        return {
            status: 200,
            result: urls
        }
      } catch(error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
          console.error(error.response.status, error.response.data);
          // res.status(error.response.status).json(error.response.data);
          return {
            status: error.response.data
          }
        } else {
          console.error(`Error with OpenAI API request: ${error.message}`);

         return {
            status: 500,
            error: {
                message: 'An error occurred during your request.',
            }
         }
        }
      }
    //return ;
  }

    generatePrompt(animal, number) {
        const capitalizedAnimal =
        animal[0].toUpperCase() + animal.slice(1).toLowerCase();
        return `Suggest three names for platillos.
    
        Anime: anime
        Names: waifu girl, husband boy, anime character
        Anime: naruto
        Names: ninja character, shuriken arm, jutsu art
        Anime: sailor moon
        Names: planets anime, anime cat, anime girl
        Anime: ${capitalizedAnimal}
        Names:`;
    }
}
const instance = new CreateImages();
export default instance;