import useTitle from "../hooks/useTitle.js";
import { Layout } from "./Layout.jsx";
import { TableauBoard } from "../components/TableauBoard.jsx";
import '../assets/styles/recursos.css'

export const REDIAN = () => {
  useTitle("REDI-AN");
  
  return (
    <Layout pagina={"Recursos"}>
      <main>
        <h1 className="titulo-recursos">REDI-AN</h1>
        <TableauBoard url={'https://public.tableau.com/views/IndicadoresAINC-Macuelizo__16783726937320/DASH-Macuelizo?:language=es-ES&:sid=&:display_count=n&:origin=viz_share_link'} />
      </main>
    </Layout>
  );
}
