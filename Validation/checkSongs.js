const checkName = (req, res, next) => {
  console.log("name is being checked");
  if (req.body.name) {
    console.log("we've got a name here!");
    next();
  } else {
    res.status(400).json({ error: "We need a name..." });
  }
};

const checkTitle = (req, res, next) => {
  console.log("title is being checked");
  if (req.body.title) {
    console.log("we've got a title here!");
    next();
  } else {
    res.status(400).json({ error: "We need a title..." });
  }
};
const checkFavorite = (req, res, next) => {
  const { is_favorite } = req.body;

  // Check if is_favorite is a boolean or undefined
  if (is_favorite === true || is_favorite === false || is_favorite === undefined) {
    console.log(is_favorite);
    next();
  } else {
    res.status(400).json({ error: "is_favorite should be a boolean" });
  }
};

const checkAlbum = (req, res, next) => {
  const { album } = req.body;
  if (album) {
    next();
  } else {
    res.status(400).json({ error: "We need an album..." });
  }
};


const checkArtist = (req, res, next) => {
  const { artist } = req.body;
  if (artist) {
    next();
  } else {
    res.status(400).json({ error: "We need an artist..." });
  }
};

const checkReleaseDate = (req, res, next) => {
  const { releaseDate } = req.body;

  // Assuming releaseDate should be in a valid date format (YYYY-MM-DD)
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  if (!dateRegex.test(releaseDate)) {
    return res.status(400).json({ error: 'Invalid release date format. Expected YYYY-MM-DD.' });
  }

  // Add additional criteria for release date validation if needed
  // For example, check if the release date is not in the future:
  const today = new Date().toISOString().split('T')[0];
  if (releaseDate > today) {
    return res.status(400).json({ error: 'Release date cannot be in the future.' });
  }

  // If the release date passes all checks, move to the next middleware
  next();
};



module.exports = { checkName, checkTitle, checkFavorite, checkAlbum, checkArtist, checkReleaseDate };
