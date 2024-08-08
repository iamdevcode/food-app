import { SvgFirstScreen } from '#/svg/onboarding/SvgFirstScreen'
import { SvgFourthScreen } from '#/svg/onboarding/SvgFourthScreen'
import { SvgSecondScreen } from '#/svg/onboarding/SvgSecondScreen'
import { SvgThridScreen } from '#/svg/onboarding/SvgThridScreen'
import { SvgOnBoarding } from '#/svg/SvgOnBoardings'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export const onboarding = [
  {
    icon: <SvgFirstScreen />,
    title: 'Comida Deliciosa',
    description:
      'Descubre una variedad de platos exquisitos que deleitarán tu paladar.',
    state: 'first'
  },
  {
    icon: <SvgSecondScreen />,
    title: 'Envío Rápido',
    description:
      'Recibe tu pedido en tiempo récord, directamente en tu puerta.',
    state: 'second'
  },
  {
    icon: <SvgThridScreen />,
    title: 'Alimentos Certificados',
    description:
      'Garantizamos la calidad y seguridad de nuestros productos alimenticios.',
    state: 'thrid'
  },
  {
    icon: <SvgFourthScreen />,
    title: 'Pago en Línea',
    description:
      'Realiza tus pagos de forma segura y cómoda desde nuestra app.',
    state: 'fourth'
  },
  {
    icon: <SvgOnBoarding width={width} height={328} />,
    title: 'Explora ahora y disfruta los beneficios',
    description:
      'Sumérgete en una experiencia única con todas las ventajas que ofrecemos.',
    state: null,
    button: true
  }
]
