/* eslint-disable react/no-danger */
/* eslint-disable react/self-closing-comp */
export default ({ children }) => <script dangerouslySetInnerHTML={{ __html: `(${children.toString()})();` }}></script>
