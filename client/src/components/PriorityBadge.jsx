
const PriorityBadge = ({ priority }) => {
  const getBadgeStyles = () => {
    switch (priority) {
      case 'High':
        return 'bg-orange-100 text-orange-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span 
      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getBadgeStyles()}`}
    >
      {priority}
    </span>
  );
};

export default PriorityBadge;