const formatString = function(string) {
    
    const longString = string.length;

    if(longString <= 40) {
        return string;
    }
        return string.slice(0, 40) + '...';
    

  };
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

  console.log(formatString('Curabitur ligula sapien.'));

  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    )
);