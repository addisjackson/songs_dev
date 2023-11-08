const checkName = (req, res, next) => {
  console.log("name is being checked");
  if (req.body.name) {
    console.log("we've got a name here!");
    next();
  } else {
    res.status(400).json({ error: "We need a name..." });
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

const checkTitle = (req, res, next) => {
  const { title } = req.body;
  if (title) {
    next();
  } else {
    res.status(400).json({ error: "We need a title..." });
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

module.exports = { checkName, checkFavorite, checkAlbum, checkTitle, checkArtist };
