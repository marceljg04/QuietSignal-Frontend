import Analyzer from "../components/Sentiment/AnalyzerChat";
import PageHeader from "../components/PageHeader";

export default function AnalyzerPage() {
  return (
    <div className="page-container">
      
      <PageHeader title="Analyzer" />
      
      <Analyzer />
    </div>
  );
}