import { keyframes} from "@mui/material";
 const AnimationBounceLeft = () => {

return(
keyframes`0% {
  -webkit-transform: translateX(-48px);
          transform: translateX(-48px);
  -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
  opacity: 1;
}
24% {
  opacity: 1;
}
40% {
  -webkit-transform: translateX(-26px);
          transform: translateX(-26px);
  -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
}
65% {
  -webkit-transform: translateX(-13px);
          transform: translateX(-13px);
  -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
}
82% {
  -webkit-transform: translateX(-6.5px);
          transform: translateX(-6.5px);
  -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
}
93% {
  -webkit-transform: translateX(-4px);
          transform: translateX(-4px);
  -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
}
25%,
55%,
75%,
87%,
98% {
  -webkit-transform: translateX(0px);
          transform: translateX(0px);
  -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
}
100% {
  -webkit-transform: translateX(0px);
          transform: translateX(0px);
  -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
  opacity: 1;
}`)};

export default AnimationBounceLeft 