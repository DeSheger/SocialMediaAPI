import styled from 'styled-components';
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface Wrapper {
    display: string;
    flexDirection: string;
    justifyContent: string;
    alignItems: string;
    background: {
      main: string;
      secondary: string;
    };
    height: string;
    width: string;
  }
}
export const WrapperBlue = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background: #1DA1F2;
  height: 100%;
  flex:1;
`;

export const WrapperWhite = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background-image: url("https://cdn.pixabay.com/photo/2016/11/18/11/16/social-1834013_960_720.png");
  background-position: center;
  height: 100%;
  flex:1;
`;

export const WrapperLightblue = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items:center;
  background: #00c4ff;
  height: 100%;
  flex:1;
`;
