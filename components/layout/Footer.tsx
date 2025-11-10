import { getPersonalInfo } from '@/lib/data-loader';
import FooterClient from './FooterClient';

/**
 * Componente Footer (Server Component)
 * Carga los datos y pasa al componente cliente
 */
export default async function Footer() {
  const personalInfo = await getPersonalInfo();

  return <FooterClient personalInfo={personalInfo} />;
}

