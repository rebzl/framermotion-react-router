import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Carga la imagen en baja calidad al inicio y luego lo carga en alta calidad
// Esto hace que la carga sea mas rapida.
import ProgressiveImage from "react-progressive-image";

// Images
import yasmeenwebp from "../images/yasmeen.webp";
import compressedimagejpg from "../images/compressed-image.jpg";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

function Home({ imageDetails, image }) {
  console.log(imageDetails.width);
  return (
    <>
      <main>
        <div className="container">
          <div className="row center">
            <div className="image-container">
              <div
                className="thumbnail"
                ref={image}
                style={{
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
              >
                <div className="frame">
                  <Link to={`/model/123`}>
                    <ProgressiveImage
                      src={yasmeenwebp}
                      placeholder={compressedimagejpg}
                    >
                      {(src) => (
                        <>
                          {console.log(src)}
                          <motion.img
                            src={src}
                            alt="Tasmeen Tariq"
                            whileHover={{ scale: 1.1 }}
                            transition={transition}
                          />
                        </>
                      )}
                    </ProgressiveImage>
                  </Link>
                </div>
              </div>
              <motion.div
                // Cuando se va a un route diferente, este div hace opacity:0 primero antes de pasarse a la otra pagina
                exit={{ opacity: 0 }}
                transition={transition}
                className="information"
              >
                <div className="title">Yasmeen Tariq</div>
                <div className="location">
                  <span>28.12312321</span>
                  <span>-81.379234</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
