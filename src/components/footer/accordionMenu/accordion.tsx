import { Accordion } from '@mantine/core';
import { MdAdd } from 'react-icons/md';

export const AccordionMenu = () => {
  return (
    <Accordion
      transitionDuration={400}
      chevron={<MdAdd color="#353535" />}
      styles={{
        chevron: {
          '&[data-rotate]': {
            transform: 'rotate(90deg)',
          },
        },
        item: {
          border: 'none'
        },
        label: {
          color: "#353535",
          fontWeight: 600
        }
      }}
    >
      <Accordion.Item value="Informações">
        <Accordion.Control>Informações</Accordion.Control>
        <Accordion.Panel>Quem Somos</Accordion.Panel>
        <Accordion.Panel>Prazo de Envio</Accordion.Panel>
        <Accordion.Panel>Trocas e Devoluções</Accordion.Panel>
        <Accordion.Panel>Promoções e Cupons</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="Minha Conta">
        <Accordion.Control>Minha Conta</Accordion.Control>
        <Accordion.Panel>Minha conta</Accordion.Panel>
        <Accordion.Panel>Meus Pedidos</Accordion.Panel>
        <Accordion.Panel>Cadastre-se</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="Onde nos Encontrar">
        <Accordion.Control>Onde nos Encontrar</Accordion.Control>
        <Accordion.Panel>Lojas</Accordion.Panel>
        <Accordion.Panel>Endereço</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}