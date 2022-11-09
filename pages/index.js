import config from "../config.json"
import styled from "styled-components"
import { useState } from "react"

import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline"

function HomePage() {

  const [ valorDoFiltro, setvalorDoFiltro] = useState("")
  
  return (
    <>
      <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
          <Menu valorDoFiltro={valorDoFiltro} setvalorDoFiltro={setvalorDoFiltro}/>
          <Header />
          <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
        </div>
    </>
  )
}

export default HomePage

const StyledHeader = styled.div`
    background-color: ${({theme}) => theme.backgroundLevel1};

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    .user-info {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 16px 32px;
      gap: 16px;
    }
  `
  const StyleBanner = styled.div`
    background-color: blue;
    background-image: url( ${ ({ bg }) => bg } );
    /* background-image: url(${config.bg}); */
    height: 230px;
  `

function Header() {
  return (
      <StyledHeader>
        <StyleBanner bg={config.bg}/>
        <section className="user-info">
          <img src={`https://github.com/${config.github}.png`} alt="" />
          <div>
            <h2>
              {config.name}
            </h2>
            <p>
              {config.job}
            </p>
          </div>
        </section>
      </StyledHeader>
  )
}

function Timeline({ searchValue, ...propriedades}) {
  // console.log("Dentro do componente", propriedades.playlists);
  const playlistNames = Object.keys(propriedades.playlists);
  // Statement
  // Retorno por expressão
  return (
      <StyledTimeline>
          {playlistNames.map((playlistName) => {
              const videos = propriedades.playlists[playlistName];
              let countVideos = 0
              //console.log(playlistName);
              //console.log(videos);
              return (
                  <section key={playlistName}>
                      <h2>{playlistName}</h2>
                      <div>
                          {videos.filter((video) => {
                              const titleNormalized = video.title.toLowerCase()
                              const searchNormalized = searchValue.toLowerCase()
                              return titleNormalized.includes(searchNormalized)
                          }).map((video) => {
                              countVideos = countVideos + 1;
                              return (
                                  <a key={video.url} href={video.url}>
                                      <img src={video.thumb} />
                                      <span>
                                          {video.title}
                                      </span>
                                  </a>
                              )
                          })}
                          {countVideos === 0 ? "Nenhum Vídeo encontrado!" : "" }
                          
                      </div>
                  </section>
              )
          })}
      </StyledTimeline>
  )
}