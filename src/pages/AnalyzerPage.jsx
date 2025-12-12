import Analyzer from "../components/Sentiment/AnalyzerChat";
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";

export default function AnalyzerPage() {
  return (
    <div className="page-container">
      
      <PageHeader title="Analyzer" />
      
      <Analyzer />

      <PageFooter />
      
    </div>
  );
}