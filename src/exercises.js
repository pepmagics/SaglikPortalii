const exercises = [
    {
      name: 'Overhead press',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/v2/overhead%20press.gif',
      kategori: 'omuz',
      tur: 'push'
    },
    {
      name: 'Lateral Raise',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/v2/lateral%20raise.gif',
      kategori: 'omuz',
      tur: 'pull'
    },
    {
      name: 'Incline Lateral/Trap Raise',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/oefeningen2/boraise.gif',
      kategori: 'omuz',
      tur: 'pull'
    },
    {
      name: 'Lying Dumbbell Rear Lateral Raise',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/oefeningen2/DBLyingRearLateralRaise.gif',
      kategori: 'omuz',
      tur: 'pull'
    },
    {
      name: 'Dumbbell Seated Rear Lateral Raise',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DBSeatedRearLateralRaise.gif',
      kategori: 'omuz',
      tur: 'pull'
    },
    {
      name: 'Standing Dumbbell Upright Row',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/oefeningen2/DBUPROW.gif',
      kategori: 'omuz',
      tur: 'pull'
    },
    {
      name: 'Standing Barbell Curl and Press',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/barcurlandpress1.gif',
      kategori: 'omuz',
      tur: 'push'
    },
    {
      name: 'Dumbbell curl with shoulder press',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DBcurlandpress.gif',
      kategori: 'omuz',
      tur: 'push'
    },
    {
      name: 'Seated Dumbbell Shoulder Press',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DBShoulderPress.gif',
      kategori: 'omuz',
      tur: 'push'
    },
    {
      name: 'Alternating Dumbbell Front Raise',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DBFrontRaise.gif',
      kategori: 'omuz',
      tur: 'pull'
    },
    {
      name: 'Barbell Front Raise',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/BBFrontRaise.gif',
      kategori: 'omuz',
      tur: 'pull'
    },
    {
      name: 'Hamer curl',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/v2/hamer%20curl.gif',
      kategori: 'kol',
      tur: 'pull'
    },
    {
      name: 'Rope push down',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/v2/rope%20pushdown.gif',
      kategori: 'kol',
      tur: 'push'
    },
    {
      name: 'Skull Crusher',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/v2/Skull%20Crusher.gif',
      kategori: 'kol',
      tur: 'push'
    },
    {
      name: 'Cable curl',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/v2/cable%20curl.gif',
      kategori: 'kol',
      tur: 'pull'
    },
    {
      name: 'Dumbbell Wrist Curl',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DBReverseWristCurl.gif',
      kategori: 'kol',
      tur: 'pull'
    },
    {
      name: 'Supine Close Grip Bench Press',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/triceps2.gif',
      kategori: 'kol',
      tur: 'push'
    },
    {
      name: 'Dumbbell Curl (two arms)',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/db_biceps_curl.gif',
      kategori: 'kol',
      tur: 'pull'
    },
    {
      name: 'Concentration Curl',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DBConcentrationCurl.gif',
      kategori: 'kol',
      tur: 'pull'
    },
    {
      name: 'Barbell curl',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/BBCurl.gif',
      kategori: 'kol',
      tur: 'pull'
    },
    {
      name: 'Dumbell/Bicep curl',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DBCurl.gif',
      kategori: 'kol',
      tur: 'pull'
    },
    {
      name: 'Isometric Wall Squat with dumbbell Curl',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/isometricwallsquatwithcurl.gif',
      kategori: 'kol',
      tur: 'pull'
    },
    {
      name: 'Dynamic Lunge and Curl',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/dynamiclungecurl1.gif',
      kategori: 'kol',
      tur: 'pull'
    },
    {
      name: 'Dumbbell curl with shoulder press',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DBcurlandpress.gif',
      kategori: 'kol',
      tur: 'push'
    },
    {
      name: 'Supine Dumbbell bicep curl',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/Supine%20DB%20bicep%20curl.gif',
      kategori: 'kol',
      tur: 'pull'
    },
    {
      name: 'Diamond Pushups',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/11DiamondPushup.gif',
      kategori: 'kol',
      tur: 'push'
    },
    {
      name: 'Lying Dumbbell Tricep Extension',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DBLyingTriExt.gif',
      kategori: 'kol',
      tur: 'push'
    },
    {
      name: 'Close Grip Bench Press',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/BBCloseGripBenchPress.gif',
      kategori: 'kol',
      tur: 'push'
    },
    {
      name: 'Bent Over Cable Extension',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/CBBentoverTriExt.gif',
      kategori: 'kol',
      tur: 'push'
    },
    {
      name: 'Seated Barbell Extension',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/BBTriExt.gif',
      kategori: 'kol',
      tur: 'push'
    },
    {
      name: 'Seated Dumbbell Tricep Overhead Extension',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DBTriExt.gif',
      kategori: 'kol',
      tur: 'push'
    },
    {
      name: 'Bench cable fly',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/v2/cable%20fly.gif',
      kategori: 'gögüs',
      tur: 'push'
    },
    {
      name: 'Dumbbell press',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/v2/dumbbell%20press.gif',
      kategori: 'gögüs',
      tur: 'push'
    },
    {
      name: 'Barbel bench press',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/v2/bench%20press.gif',
      kategori: 'gögüs',
      tur: 'push'
    },
    {
      name: 'DECLINE MACHINE CHEST FLY',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/DeclineFly.gif',
      kategori: 'gögüs',
      tur: 'push'
    },
    {
      name: 'Pull Over (stability ball)',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/PullOverOnBall.gif',
      kategori: 'gögüs',
      tur: 'pull'
    },
    {
      name: 'Standard Pushup',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/08StandardPushup.gif',
      kategori: 'gögüs',
      tur: 'push'
    },
    {
      name: 'DUMBBELL PRESS ON BALL (STABILITY BALL)',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/DBpress.gif',
      kategori: 'gögüs',
      tur: 'push'
    },
    {
      name: 'Decline Dumbell Chest Flye',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/decline%20DB%20flye.gif',
      kategori: 'gögüs',
      tur: 'push'
    },
    {
      name: 'Decline Dumbbell Bench Press',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/DeclineBenchPress.gif',
      kategori: 'gögüs',
      tur: 'push'
    },
    {
      name: 'Decline Bench Press (barbell)',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/BarbellDeclineBenchPress.gif',
      kategori: 'gögüs',
      tur: 'push'
    },
    {
      name: 'Decline Machine Chest Press',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/DeclineChestPress.gif',
      kategori: 'gögüs',
      tur: 'push'
    },
    {
      name: 'Dumbell pullover',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/DBPullover.gif',
      kategori: 'gögüs',
      tur: 'pull'
    },
    {
      name: 'MACHINE INCLINE CHEST PRESS',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/machinei.gif',
      kategori: 'gögüs',
      tur: 'push'
    },
    {
      name: 'BARBELL INCLINE BENCH PRESS',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/Barbell%20Incline%20Chest%20Press.gif',
      kategori: 'gögüs',
      tur: 'push'
    },
    {
      name: 'INCLINE DUMBBELL CHEST FLY',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/InclineBenchPress.gif',
      kategori: 'gögüs',
      tur: 'push'
    },
    {
      name: 'Incline dumbell press',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/DB%20incline%20chest%20press.gif',
      kategori: 'gögüs',
      tur: 'push'
    },
    {
      name: 'Wide Pushups',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/09WidePushup.gif',
      kategori: 'gögüs',
      tur: 'push'
    },
    {
      name: 'Decline Machine Chest Fly',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/DeclineFly.gif',
      kategori: 'gögüs',
      tur: 'push'
    },
    {
      name: 'Side plank',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/v2/side-plank.gif',
      kategori: 'karin',
      tur: 'other'
    },
    {
      name: 'Planking',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/v2/planking.gif',
      kategori: 'karin',
      tur: 'other'
    },
    {
      name: 'Straight Leg Obliques',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/big_cats.gif',
      kategori: 'karin',
      tur: 'other'
    },
    {
      name: 'Air Bike Crunches',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/Air%20Bike.gif',
      kategori: 'karin',
      tur: 'other'
    },
    {
      name: 'Full Situp with Twist',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/full_sit-up_twist.gif',
      kategori: 'karin',
      tur: 'other'
    },
    {
      name: 'Ankle Wiggles',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/ankle_wiggles.gif',
      kategori: 'karin',
      tur: 'other'
    },
    {
      name: 'Alternating Toe Touch',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/alt_toe_touch_crunch.gif',
      kategori: 'karin',
      tur: 'other'
    },
    {
      name: 'Supine Double Leg Raise',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/Double%20leg%20raise.gif',
      kategori: 'karin',
      tur: 'other'
    },
    {
      name: 'Hanging Hip Raise',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/WtHangHipRaise.gif',
      kategori: 'karin',
      tur: 'other'
    },
    {
      name: 'Power boat pose',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/the%20power%20boat%20pose.gif',
      kategori: 'karin',
      tur: 'other'
    },
    {
      name: 'Ball Transfer Crunch',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/Ball%20Transfer%20Crunch.gif',
      kategori: 'karin',
      tur: 'other'
    },
    {
      name: 'Crunch',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/Abdominal%20Crunch5.gif',
      kategori: 'karin',
      tur: 'other'
    },
    {
      name: 'Double Crunch',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/suitcase_crunch.gif',
      kategori: 'karin',
      tur: 'other'
    },
    {
      name: 'Vertical Hip Raise',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/WtVerticalHipRaise.gif',
      kategori: 'karin',
      tur: 'other'
    },
    {
      name: 'Wide lat pulldown',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/v2/wide%20lat%20pulldown.gif',
      kategori: 'sirt',
      tur: 'pull'
    },
    {
      name: 'Pull up',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/v2/pull%20up.gif',
      kategori: 'sirt',
      tur: 'pull'
    },
    {
      name: 'Dumbbell bent over-row',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/v2/dumbell%20row.gif',
      kategori: 'sirt',
      tur: 'pull'
    },
    {
      name: 'Unilateral lat prayer',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/v2/Unilateral%20lat%20prayer.gif',
      kategori: 'sirt',
      tur: 'pull'
    },
    {
      name: 'Unilateral Face Pull',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/v2/face%20pull.gif',
      kategori: 'sirt',
      tur: 'pull'
    },
    {
      name: 'Unilateral shoulder pull',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/v2/shoulder%20pull.gif',
      kategori: 'sirt',
      tur: 'pull'
    },
    {
      name: 'OPPOSITE ARM OPPOSITE LEG RAISE',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/oefeningen2/opposite%20arm%20opposite%20leg%20raise.gif',
      kategori: 'sirt',
      tur: 'other'
    },
    {
      name: 'BACK EXTENSION WITH LOWER TRAP RAISE',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/oefeningen2/8.gif',
      kategori: 'sirt',
      tur: 'other'
    },
    {
      name: 'ALTERNATING SUPERMAN',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/oefeningen2/alt_superman.gif',
      kategori: 'sirt',
      tur: 'other'
    },
    {
      name: 'V-BAR PULLDOWNS',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/closegri.gif',
      kategori: 'sirt',
      tur: 'pull'
    },
    {
      name: 'UNDERHAND LOW ROW',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/low%20row%20underhand%20grip.gif',
      kategori: 'sirt',
      tur: 'pull'
    },
    {
      name: 'CLOSE GRIP UNDERHAND PULLDOWN',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/LVUnderhandPulldown.gif',
      kategori: 'sirt',
      tur: 'pull'
    },
    {
      name: 'T-BAR ROWS',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/oefeningen2/tbarrows.gif',
      kategori: 'sirt',
      tur: 'pull'
    },
    {
      name: 'SEATED ROW WITH BANDS',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/oefeningen2/vsit-rw_fittube_sec_door_attachment.gif',
      kategori: 'sirt',
      tur: 'pull'
    },
    {
      name: 'STANDING DUMBELL UPRIGHT ROW',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/DBUPROW.gif',
      kategori: 'sirt',
      tur: 'pull'
    },
    {
      name: 'Calf jumps',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/v2/calf%20jumps.gif',
      kategori: 'bacak',
      tur: 'other'
    },
    {
      name: 'Unilateral leg press',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/v2/unilateral%20leg%20press.gif',
      kategori: 'bacak',
      tur: 'other'
    },
    {
      name: 'Squat',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/v2/squat.gif',
      kategori: 'bacak',
      tur: 'other'
    },
    {
      name: 'Elevated bulgarian split squat',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/v2/split%20squat.gif',
      kategori: 'bacak',
      tur: 'other'
    },
    {
      name: 'ISOMETRIC WALL SQUAT WITH DB CURL',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/isometricwallsquatwithcurl.gif',
      kategori: 'bacak',
      tur: 'other'
    },
    {
      name: 'BARBELL BOX STEP UP',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/BBStepUp.gif',
      kategori: 'bacak',
      tur: 'other'
    },
    {
      name: 'SINGLE LEG KICKBACKS',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/oefeningen2/single%20leg%20kickback.gif',
      kategori: 'bacak',
      tur: 'other'
    },
    {
      name: 'WALKING LATERAL DB LUNGE',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/oefeningen2/DBwalking_latlunge.gif',
      kategori: 'bacak',
      tur: 'other'
    },
    {
      name: 'WALKING LUNGE WITH BARBELL',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/oefeningen2/bb_walking_lunge.gif',
      kategori: 'bacak',
      tur: 'other'
    },
    {
      name: 'Romanian deadlift',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/v2/romain%20deadlift.gif',
      kategori: 'bacak',
      tur: 'other'
    },
    {
      name: 'Front Squat (barbell)',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/oefeningen2/BBFrontSquat.gif',
      kategori: 'bacak',
      tur: 'other'
    },
    {
      name: 'OVERHEAD SQUAT (BARBELL)',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/oefeningen2/overhead_squat.gif',
      kategori: 'bacak',
      tur: 'other'
    },
    {
      name: 'STANDING MACHINE CALF RAISE',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/Standing%20Machine%20Calf%20Raise.gif',
      kategori: 'bacak',
      tur: 'other'
    },
    {
      name: 'DUMBELLS PRESS WITH ISOMETRIC LUNGE',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/voorbeeldoefeningen/DB20press20with20isometric20lunge.gif',
      kategori: 'bacak',
      tur: 'other'
    },
    {
      name: 'ADDUCTION MACHINE',
      description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
      imageUrl: 'https://www.fitnessschemas.nl/images/adductor%20machine.gif',
      kategori: 'bacak',
      tur: 'other'
    }
  ];
  
  module.exports = exercises;
  