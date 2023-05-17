import express from 'express';
const route = express.Router();

route.get('/app/:name', (req, res) => {
  const userAgent = req.get('User-Agent');
  const { name } = req.params;
  console.log(userAgent);
  // check platform of device is Ios or Android
  if (userAgent.includes('Android')) {
    switch (name) {
      case 'insect-ai':
        res.redirect('market://details?id=com.ikong.insectAI');
        break;
      case 'find-plant':
        res.redirect('market://details?id=com.findplant.plantidentification');
        break;
      case 'mushroom':
        res.redirect('market://details?id=com.mushroomaidetect');
        break;
      case 'stone':
        return res.json('app is not available on Android');
    }
  } else if (userAgent.includes('iPhone')) {
    switch (name) {
      case 'insect-ai':
        res.redirect('itms-apps://itunes.apple.com/app/id1673704832?mt=8');
        break;
      case 'find-plant':
        return res.json('app is not available on Ios');
      case 'mushroom':
        res.redirect('itms-apps://itunes.apple.com/app/id6447349561?mt=8');
        break;
      case 'stone':
        res.redirect('itms-apps://itunes.apple.com/app/id6448445038?mt=8');
        break;
    }
  }
});

export default route;
