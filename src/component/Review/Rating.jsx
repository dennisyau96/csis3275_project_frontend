export default function Rating(){
    const labels = {
        1: 'Very bad',
        2: 'Bad',
        3: 'Meh',
        4: 'Good',
        5: 'Very good'
      }
      
      const [label, setLabel] = useState(labels[3])
      const [currentValue, seCurrentValue] = useState(3)
      
      return (
        <div className="d-flex align-items-center">
          <div className="text-body-secondary me-3">{currentValue} / 5</div>
          <CRating
            className="d-inline-flex"
            onChange={(value) => seCurrentValue(value)}
            onHover={(value) => setLabel(value ? labels[value] : labels[currentValue])}
            value={currentValue}
          />
          {label && <CBadge className="ms-3" color="dark">{label}</CBadge>}
        </div>
      );
}