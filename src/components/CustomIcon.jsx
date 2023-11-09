import { useTheme } from '@mui/material';
import { ReactSVG } from 'react-svg';

// -----------SVG's----------------

import namratha from '../../src/images/svgs/namratha.svg';
import doctor from '../../src/images/svgs/doctor.svg';
import animDoc from '../../src/images/svgs/animDoc.svg';
import clinicalDerma from '../../src/images/svgs/clinicalDerma.svg';
import interThera from '../../src/images/svgs/interThera.svg';
import skinReju from '../../src/images/svgs/skinReju.svg';
import threeDoc from '../../src/images/svgs/threeDoc.svg';
import phone from '../../src/images/svgs/phone.svg';
import post from '../../src/images/svgs/post.svg';
import facebook from '../../src/images/svgs/facebook.svg';
import instagram from '../../src/images/svgs/instagram.svg';
import linkedin from '../../src/images/svgs/linkedin.svg';
import twitter from '../../src/images/svgs/twitter.svg';

const createIcon = ({
  style,
  className,
  onClick,
  alt,
  onMouseDown,
  svgStyle,
  color,
  src,
}) => {
  return (
    <ReactSVG
      src={src}
      style={style}
      className={className}
      beforeInjection={(svg) => {
        svg.setAttribute('style', svgStyle);
      }}
      onClick={onClick}
      color={color}
    />
  );
};

const CustomIcon = ({
  name,
  style,
  className,
  onClick,
  alt,
  svgStyle,
  color,
}) => {
  const theme = useTheme();

  const light = {
    namratha: createIcon({
      src: namratha,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    doctor: createIcon({
      src: doctor,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    animDoc: createIcon({
      src: animDoc,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    clinicalDerma: createIcon({
      src: clinicalDerma,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    interThera: createIcon({
      src: interThera,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    skinReju: createIcon({
      src: skinReju,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    threeDoc: createIcon({
      src: threeDoc,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    phone: createIcon({
      src: phone,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    post: createIcon({
      src: post,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    facebook: createIcon({
      src: facebook,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    instagram: createIcon({
      src: instagram,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    linkedin: createIcon({
      src: linkedin,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
    twitter: createIcon({
      src: twitter,
      style,
      className,
      svgStyle,
      onClick,
      color,
    }),
  };

  return <div>{theme.palette.mode === 'light' && light[name]}</div>;
};

export default CustomIcon;
