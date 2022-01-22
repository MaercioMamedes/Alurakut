import React from 'react';
//import nookies from  'nokies';
//import jwt from 'jsonwebtoken';
import MainGrid from '../source/components/MainGrid'
import Box from '../source/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../source/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../source/components/ProfileRelations';

function ProfileSidebar(propriedade) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${propriedade.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr/>

      <p>
        <a className="boxLink" href={`https://github.com/${propriedade.githubUser}`} target="_blank">
          @{propriedade.githubUser}
        </a>

      </p>

      <hr/>

    </Box>
  )
}

export default function Home() {
  const usuario = 'MaercioMamedes';
  const pessoasFavoritas = [
    'juunegreiros',
    'vanessametonini',
    'clenisson',
    'omariosouto',
    'peas',
    'rafaballerini',
    'Derecky',
    'gustavoguanabara'
  ]

  return (



    <>
      <AlurakutMenu/>
        <MainGrid>
          <div className="profileArea" style={{ gridArea: 'profileArea' }}>
            <ProfileSidebar githubUser = {usuario}/>
          </div>

          <div className="welcomeArea" style ={{ gridArea: 'welcomeArea'}}>
            <Box>
              <h1 className="title">
                Bem-vindo(a)
              </h1>

              <OrkutNostalgicIconSet />
            </Box>
          </div>

          <div className="profileRelationsArea" style = {{ gridArea: 'profileRelationsArea'}}>
            <ProfileRelationsBoxWrapper>
              <h2 className="smallTitle">
                Pessoas da Comunidade DEV ({pessoasFavoritas.length})
              </h2>

              <ul>
                {pessoasFavoritas.map((itemAtual)=>{
                  return(
                    <li>
                      <a href="{`/user/${itemAtual}`}" key={itemAtual}>
                        <img src={`https://github.com/${itemAtual}.png`}/>
                        <span>{itemAtual}</span>
                      </a>
                    </li>
                  )
                }
                )}
              </ul>
            
            </ProfileRelationsBoxWrapper>
          </div>

        </MainGrid>
    </>
  );
}
