// Cristiano Ronaldo CR7 "SIUUUUU!" Real-Time Animated Braille ASCII Engine
// Powered by the exact Braille & Block ASCII masterpieces from https://emojicombos.com/ronaldo-ascii-art

const ARTS = {
  "giantA": "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣶⣶⣶⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣾⡋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠻⠿⠻⠿⠻⢤⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⢀⢤⣒⣽⢍⣸⣷⣶⣉⣁⣀⠑⠤⠤⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢎⣨⡟⣉⣄⣴⡎⣳⡏⡏⣡⡦⣼⠋⣷⢦⣠⣫⠳⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⢿⣅⠈⢹⠟⠸⡟⠓⢟⡷⠥⢷⢿⢻⢾⠇⣴⢮⡏⠆⢹⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡸⣾⣟⢬⣍⣊⠠⡐⢶⠨⢀⢠⢡⢸⠀⠸⢸⠀⢠⢸⣶⡳⡿⣻⣃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡎⣧⡾⣿⣏⢯⢳⢶⣿⡟⢿⠟⣿⣾⢠⣮⣘⣴⠎⣬⣾⣯⣮⡞⢯⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⢯⣍⣶⡽⣿⡿⢦⠻⢸⢘⣿⣿⣾⣿⣿⣿⡏⢿⠬⢿⡸⢻⣛⣹⡴⢮⣻⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⠟⣜⣿⣿⢿⡽⠋⠀⠘⣆⠤⡧⡃⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⠶⣿⣿⣋⣩⣶⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⠟⣌⢦⣿⢡⡿⠊⠀⠀⠀⠀⠸⣆⡧⣈⢷⣤⣤⢲⣶⠀⠀⠀⢀⣿⣰⣷⢇⢻⣥⣿⣻⣮⢿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⡛⣡⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⢻⣿⣻⣾⣿⣧⣿⡏⠀⠀⢀⣾⣷⣿⡯⣿⡀⠹⣿⣧⡈⢷⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⢀⣴⣟⣽⣿⣿⣿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠳⣻⡿⢟⣓⡿⠀⠀⠀⢸⣽⣾⣿⢿⣹⣵⠀⠘⢷⣮⡱⣿⣮⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⢀⣴⣿⢻⣽⣿⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠙⠶⣶⣿⠇⠀⠀⢀⣯⣾⣯⣯⣈⡇⢷⣧⠀⠀⠙⠻⣾⣿⡻⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⢀⣴⣶⡿⣯⢿⡿⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡶⡒⣾⣿⠃⠀⠀⠀⣼⣟⣍⢳⡻⡯⣯⣩⣯⡆⠀⠀⠀⠈⠻⣝⢫⣻⣿⢷⣦⣠⠤⣴⡶⠶⠀⠀⠀⠀⠀\n⠀⣰⣿⣿⣿⣿⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢿⠀⣿⠃⠀⠀⠀⣜⢯⣹⣯⡏⣟⣿⡧⠿⢧⠁⠀⠀⠀⠀⠀⠈⠙⢾⣿⣟⣭⣥⣔⣧⣀⠀⠀⠀⠀⠀⠀\n⣸⣿⡿⣿⠏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡘⠻⡾⣿⡀⠀⠀⣰⣿⣺⣟⣯⠟⢥⡿⢟⣷⣮⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣷⣻⣯⣿⡻⠿⣦⡄⠀⠀⠀\n⠻⠿⢱⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠦⣵⣿⣿⡻⣿⣿⣷⣯⡾⢷⣯⣏⣣⣶⣧⢷⣮⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣻⣿⣶⣄⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢺⣶⣿⣷⣾⣿⣿⣿⣿⢿⣿⡿⣿⣿⣿⣞⣶⠿⣽⣽⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠇⠙⠋⠁⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⡗⢿⣿⣧⡷⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣽⣿⣯⣵⢹⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣇⣷⡿⣿⣿⣿⣮⣿⣿⣿⣿⣿⣿⣿⣿⣟⡫⣻⡿⣷⣾⣻⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣻⣷⣿⣿⣯⣿⣿⣾⣿⣿⢿⣿⣶⣾⣏⣼⣞⣿⣿⣥⢿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣯⣿⣿⣷⣿⣷⣿⡭⡿⣽⠏⠉⠉⠉⠲⣤⣽⣼⣿⣿⣥⣧⣧⣦⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢿⡷⣓⣿⣿⣿⣻⣿⣻⣻⣯⠋⠀⠀⠀⠀⠀⢹⣾⣟⣿⣿⣿⣿⡿⡛⢻⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠀⠘⣿⣿⣭⡽⠟⠛⠛⠛⠋⠀⠀⠀⠀⠀⠀⢘⡟⣿⣿⣏⣍⣖⣹⢿⡿⡞⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠋⠀⢈⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⠛⠛⠻⡉⠉⠀⢈⡖⢸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣥⣀⠠⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⣀⣴⣶⣷⣶⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠗⠈⠑⢮⣿⡾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡟⠋⠁⠘⡌⠙⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⢋⠀⠄⢱⡿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢩⠁⠀⢛⣱⡀⠈⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡮⣤⣦⡀⢀⡾⡝⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡆⠖⠋⠁⢣⠀⠈⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠃⡰⠉⣳⣾⡝⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡾⠋⠠⠈⣆⠀⠸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⠀⢠⣾⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠣⡀⠀⠈⠀⠀⢱⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⢁⢤⣰⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣄⠀⠀⠀⠀⢇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠃⣮⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢆⠀⠀⣀⠘⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠎⢤⡿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢣⢊⠬⠆⠑⣄⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⡿⣥⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢦⣶⡒⢶⡞⠢⣄⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⣠⣾⣛⡏⡻⣳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢿⣿⣿⣾⢷⣿⣿⣶⣯⡿⢆⡀\n⠀⠀⠀⠀⠀⠀⠉⠉⠚⠚⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠦⠿⠿⠿⠿⠿⠿⠿⠿⠷⠷⠾\n⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⡄\n⢽⣿⣿⠛⢻⣿⣿⣿⣿⠛⠛⠛⠛⢻⣿⣿⠿⠛⠛⠿⣿⡟⠛⠛⠛⠛⣿⡟⢿⣿⣿⣿⠛⢻⡟⠛⠛⠛⠻⣿⣿⣿⡇\n⢸⣿⣿⠀⢸⣿⣿⣿⣿⠀⢿⣿⣿⣿⡿⠁⣴⣶⣶⣾⣿⡇⠀⣿⣿⣿⣿⡏⢀⠙⢿⣿⠀⢸⡇⠀⣷⣷⣆⠈⢿⣿⡇\n⢸⣿⣿⠀⢸⣿⣿⣿⣿⠀⢤⣤⣴⣿⣧⠀⢿⣿⣤⠀⣿⡇⠀⣤⣤⣼⣿⡇⠀⣷⣄⠙⠀⢸⡇⠀⣿⣿⡟⠀⣸⣿⡇\n⢸⣿⣿⣀⣈⣉⣉⣉⣿⣀⣈⣉⣉⣹⣿⣷⣄⣈⣁⣤⣿⣇⣀⣉⣉⣉⣿⣇⣀⣿⣿⣷⣄⣸⣧⣀⣉⣉⣀⣴⣿⣿⡇",
  "giantB": "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣶⣶⣶⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣾⡋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠻⠿⠻⠿⠻⢤⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⢀⢤⣒⣽⢍⣸⣷⣶⣉⣁⣀⠑⠤⠤⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢎⣨⡟⣉⣄⣴⡎⣳⡏⡏⣡⡦⣼⠋⣷⢦⣠⣫⠳⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⢿⣅⠈⢹⡿⣼⡟⠷⣟⡷⢥⢷⢿⣻⢾⠇⣴⢮⡏⠆⢹⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡸⣾⣟⠈⠉⠊⡇⣤⣤⣭⣭⣷⢹⢸⢀⢹⣸⣿⢿⣾⣶⡳⡿⣻⣃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡎⣧⡾⣾⣆⢧⢰⢷⣿⡟⢿⠟⣿⣿⢠⣮⣙⣶⠏⣿⣿⣯⣮⡞⢯⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⢯⣍⣶⡽⣿⡿⢦⠻⢸⠘⢇⡨⣸⣿⢿⡾⡏⠿⠤⠞⠸⣿⣛⣹⡴⢮⣻⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⠟⣜⣿⣿⢿⡽⠋⠀⠘⣆⠀⠇⠸⣡⣿⣿⢘⠇⡇⠸⠇⠀⡀⡽⣿⣿⣋⣩⣶⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⠟⣌⢦⣿⢡⡿⠊⠀⠀⠀⠀⠸⣆⡀⠀⢻⣿⣿⠈⠀⠀⠀⠀⢘⣼⣿⣷⢇⢻⣥⣿⣻⣮⢿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⡛⣡⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⢻⣙⠀⣾⣿⡧⡀⠀⠀⠀⣠⢾⣿⣿⡯⣿⡀⠹⣷⠃⠈⢷⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⢀⣴⣟⣽⣿⣿⣿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠳⡃⠿⢟⣒⠾⣤⣔⠮⣖⣽⢿⣿⢷⣹⣵⠀⠘⢦⡀⠀⢹⣮⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⢀⣴⣿⢻⣽⣿⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠙⠶⣶⡚⢽⣦⡬⣭⣾⣯⣬⣏⣈⠁⢷⣧⠀⠀⠙⠢⣜⠸⠻⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⢀⣴⣶⡿⣯⢿⡿⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡶⡒⣾⣛⣿⣝⣛⡛⠒⠊⣀⢰⠻⠫⢬⣩⣯⡆⠀⠀⠀⠈⠳⣄⢩⠻⣿⢷⣦⣠⠬⣴⡾⠶⠀⠀⠀⠀⠀\n⠀⣰⣿⣿⣿⣿⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢿⠀⣨⢯⢾⠚⣿⡙⢫⢉⠭⡏⢙⣿⡥⠿⢧⠁⠀⠀⠀⠀⠀⠈⠙⢾⣿⣟⣭⣥⣔⣧⣀⠀⠀⠀⠀⠀⠀\n⣸⣿⡿⣿⠏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡘⠸⠐⠃⣨⡟⢸⢹⢸⢸⠏⣠⠟⢥⡿⢛⣷⣮⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣷⣻⣯⣿⡻⠿⣦⡄⠀⠀⠀\n⠻⠿⢱⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠆⠰⡀⠰⠛⣡⣿⢠⢣⡌⢐⣃⣉⡡⠶⡥⢷⣮⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣻⣿⣶⣄⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢀⡀⡧⠀⢰⠏⢸⠃⢎⣣⡯⠖⣟⢴⣊⣴⠿⠥⡽⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠹⠇⠙⠋⠁⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⡇⢳⡷⣢⠀⠈⠑⠼⣀⠜⠁⠙⣊⢝⣿⣯⠵⠶⢤⣴⠹⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢐⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⢣⢇⡀⠙⢮⡑⠢⠤⠀⢻⠶⢖⣿⣷⣿⡿⠒⠢⣪⠟⡁⠀⠹⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢇⠘⠸⡍⡻⣶⡽⠦⠤⠒⢃⣠⣜⣻⠽⣭⡶⣦⡏⡤⠖⣽⡤⠀⢻⡄⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡾⡏⣀⣀⡽⣑⣢⣕⣄⠤⡶⣽⠏⠉⠉⠉⠲⣤⣍⣈⠕⠪⢅⣠⡠⢤⣷⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢷⡶⣂⣼⣿⢀⠀⠀⠀⣰⢯⠋⠀⠀⠀⠀⠀⢹⣾⣗⣾⠽⠓⠛⡿⡋⢹⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠀⠘⣿⣿⣭⡽⠗⠚⠛⠛⠋⠀⠀⠀⠀⠀⠀⠈⠉⠙⢧⠀⠀⠀⠘⢟⡟⡄⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠋⠀⢈⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⡀⠀⠀⢈⡖⢸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣥⣀⠠⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⣀⣴⣶⣷⣶⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠗⠈⠑⢮⣿⡾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡟⠋⠁⠘⡌⠙⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⢋⠀⠄⢱⡿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢩⠁⠀⢛⣱⡀⠈⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡮⣤⣦⡀⢀⡾⡝⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡆⠖⠋⠁⢣⠀⠈⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠃⡰⠉⣳⣾⡝⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡾⠋⠠⠈⣆⠀⠸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⠀⢠⣾⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠣⡀⠀⠈⠀⠀⢱⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⢁⢤⣰⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣄⠀⠀⠀⠀⢇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠃⣮⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢆⠀⠀⣀⠘⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠎⢤⡿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢣⢊⠬⠆⠑⣄⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⡿⣥⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢦⣶⡒⢶⡞⠢⣄⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⣠⣾⣛⡏⡻⣳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢿⣿⣿⣾⢷⣿⣿⣶⣯⡿⢆⡀\n⠀⠀⠀⠀⠀⠀⠉⠉⠚⠚⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠦⠿⠿⠿⠿⠿⠿⠿⠿⠷⠷⠾\n⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⡄\n⢽⣿⣿⠛⢻⣿⣿⣿⣿⠛⠛⠛⠛⢻⣿⣿⠿⠛⠛⠿⣿⡟⠛⠛⠛⠛⣿⡟⢿⣿⣿⣿⠛⢻⡟⠛⠛⠛⠻⣿⣿⣿⡇\n⢸⣿⣿⠀⢸⣿⣿⣿⣿⠀⢿⣿⣿⣿⡿⠁⣴⣶⣶⣾⣿⡇⠀⣿⣿⣿⣿⡏⢀⠙⢿⣿⠀⢸⡇⠀⣷⣷⣆⠈⢿⣿⡇\n⢸⣿⣿⠀⢸⣿⣿⣿⣿⠀⢤⣤⣴⣿⣧⠀⢿⣿⣤⠀⣿⡇⠀⣤⣤⣼⣿⡇⠀⣷⣄⠙⠀⢸⡇⠀⣿⣿⡟⠀⣸⣿⡇\n⢸⣿⣿⣀⣈⣉⣉⣉⣿⣀⣈⣉⣉⣹⣿⣷⣄⣈⣁⣤⣿⣇⣀⣉⣉⣉⣿⣇⣀⣿⣿⣷⣄⣸⣧⣀⣉⣉⣀⣴⣿⣿⡇",
  "midSiuuu": "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣾⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢼⣿⣿⡿⡛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⣠⣔⡋⣩⣴⣖⣊⣈⠢⠄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠧⡿⣁⢤⣾⢹⣭⢣⢤⣾⢙⠗⢤⡽⢳⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⠢⣼⠝⠊⠩⡽⡏⡎⡟⠺⢸⣼⣳⣣⣤⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⡸⣿⡰⡄⣦⢿⠿⠿⣿⡇⡙⣒⣽⢻⣼⣫⣯⢼⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣟⣵⣬⣿⠟⡜⠙⠘⣤⢱⣿⣷⠃⠹⠑⠃⣿⣋⡧⣆⡻⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⢟⣹⠿⢟⠕⠁⠀⠰⡀⠁⢡⣿⡏⠝⠐⠘⠀⡐⣼⣿⢫⡴⣯⣟⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⢀⡴⢛⣭⣾⣷⠔⠁⠀⠀⠀⠀⢻⢢⢠⣿⣟⠀⠀⠀⣀⣾⣿⡏⣇⠱⣯⠋⢯⣻⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⢀⣴⢯⣾⣾⡿⠛⠁⠀⠀⠀⠀⠀⠀⢸⢫⢸⠞⣡⠥⣤⠮⣷⡯⣿⢳⢯⡄⠙⢄⡀⢹⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⢀⣴⢿⣻⣿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠀⢙⡻⠍⢟⡲⢾⣽⠶⢮⣬⠜⣶⡀⠀⠙⢮⡈⢻⣿⣦⡀⠀⠀⠀⢀⡀⠀⠀⠀\n⠀⣠⣾⣿⣷⠿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⠈⡶⣻⢷⣶⣤⠔⡂⠬⣬⣗⣞⠃⠀⠀⠀⠉⠢⣬⢿⣿⣗⢉⡟⠉⠁⠀⠀⠀\n⣸⣿⢿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠘⢸⡞⡜⣏⢻⠎⡼⢎⡿⢳⣼⡄⠀⠀⠀⠀⠀⠀⠉⢾⣿⣿⣟⠷⣦⠀⠀⠀\n⠛⠋⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠎⢰⠀⡒⣱⣇⢆⡀⡮⢭⠥⣚⢞⡼⢟⡀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣻⣷⡄⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡸⢖⢔⡃⠰⢁⠋⢈⠗⠍⢽⣮⣶⣛⡀⢊⣷⡀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠉⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣩⠈⠻⡂⠄⡀⠘⣦⣤⣶⣵⣿⠭⡠⡲⠊⠘⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡣⠋⡍⠳⣎⠷⠀⠒⣠⣜⣫⣏⠷⣲⣫⠔⣝⠄⠸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣞⢇⠄⣴⠬⠔⠳⢒⣣⠏⠀⠀⠉⢶⢢⢗⡙⣦⣃⣶⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠉⢣⣾⣙⣦⠤⠤⢾⠎⠀⠀⠀⠀⠘⠿⢾⡉⠀⠈⢵⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠞⠀⣼⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⡀⠀⠈⡗⢡⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⢟⣧⣀⣻⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢱⣴⡶⢿⢶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠃⠀⣨⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡥⠀⡨⡆⠘⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢮⣭⡀⢡⢯⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢱⠰⠒⠛⡀⠘⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠾⢠⠉⣷⡯⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⡋⠐⠱⠀⠰⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⡌⠀⣠⣾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢄⠀⠀⠀⢃⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⡰⣰⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢢⠀⠀⠈⡄⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⡠⠡⡼⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⡊⠵⠐⢄⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⢀⣴⣿⣿⡶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢲⣬⣲⣏⣱⣄⣀⡀⠄⠀\n⠀⠀⠀⠀⠐⠿⠶⣵⡽⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣻⣿⣿⣿⣿⣿⣿⣥⣦",
  "compactSiuuu": "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⠂⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⣴⣿⢿⣿⠛⠛⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⣴⣿⠟⠁⠀⢿⣿⠁⣿⣿⣿⠻⣿⣄⠀⠀⠀⠀\n⠀⠀⣠⡾⠟⠁⠀⠀⠀⢸⣿⣸⣿⣿⣿⣆⠙⢿⣷⡀⠀⠀\n⣰⡿⠋⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⠀⠀⠉⠻⣿⡀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣆⠂⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⡿⣿⣿⣿⣿⡄⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⠿⠟⠀⠀⠻⣿⣿⡇⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⢀⣾⡿⠃⠀⠀⠀⠀⠀⠘⢿⣿⡀⠀⠀⠀\n⠀⠀⠀⠀⠀⣰⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣷⡀⠀⠀\n⠀⠀⠀⠀⢠⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣧⠀⠀\n⠀⠀⠀⢀⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣆⠀\n⠀⠀⠠⢾⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣷",
  "portraitSiuuu": "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣶⣾⣿⣿⣿⣿⣶⣦⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⢿⣿⣿⣿⣽⣿⣿⣿⣿⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣾⣿⣿⣿⣿⣿⣿⢿⡿⣿⣿⣿⣿⣿⣿⣿⣟⣿⡿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⠟⠉⠁⠀⠀⠀⠀⠀⠉⠈⠉⠛⠛⢿⣿⣿⢿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠸⢻⣿⣿⡟⢁⡴⠶⠶⣶⣶⣤⡀⠀⠀⠀⢀⣤⣤⣄⣀⣀⢸⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⡏⢀⣴⣶⣲⢿⣿⠆⠀⠀⢠⣿⣿⣭⣥⣄⡉⢳⡟⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⡿⠃⠈⠛⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠉⠉⠹⠗⠙⡇⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⢀⡄⢿⣿⠁⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⡺⡿⣿⣿⡄⠀⠀⠀⠀⠀⠀⢶⣾⠿⠶⠷⣶⠀⠀⠀⠀⠀⠀⢠⣿⣵⣿⡀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⣿⡀⢻⣿⣷⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⣼⣿⡋⢏⡃⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⠿⣿⣟⠀⠀⠀⠀⠀⢀⡴⠖⠚⠛⠓⠶⣤⡀⠀⠀⠀⠀⢸⣿⣦⠟⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠛⣿⠀⠀⠀⠀⠀⠀⠀⠐⢦⣤⣤⡦⠈⠀⠀⠀⠀⠀⣸⠷⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣦⣀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣨⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣷⣼⣦⡀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣶⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣷⣶⣦⣶⣶⣶⣾⣿⣿⣿⣿⢿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠟⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠈⢿⡿⠛⠛⠛⠛⠛⠛⠛⠉⠉⠀⠀⠀⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠈⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⡇⠀⠀⠀⠀⠈⠻⢷⣤⣀⡴⠚⠀⠀⠀⠀⠀⠀⣾⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⢴⣾⣿⠁⠀⠀⠀⠀⠀⠀⠀⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⣿⣿⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⢀⣠⢞⡅⠈⢿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣰⡿⠃⠀⣌⠲⢄⡀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⣀⢴⣫⠾⠋⠀⠀⠀⠈⠛⢿⣷⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⠾⠟⠉⠀⠀⠀⠈⠳⢤⡉⠒⢤⣀⠀⠀\n⣀⠤⢖⣮⠷⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠓⠒⠒⠒⠒⠒⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠳⢤⣈⠑⠲\n⣷⠶⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠳⡾\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⡄\n⢽⣿⣿⠛⢻⣿⣿⣿⣿⠛⠛⠛⠛⢻⣿⣿⠿⠛⠛⠿⣿⡟⠛⠛⠛⠛⣿⡟⢿⣿⣿⣿⠛⢻⡟⠛⠛⠛⠻⣿⣿⣿⡇\n⢸⣿⣿⠀⢸⣿⣿⣿⣿⠀⢿⣿⣿⣿⡿⠁⣴⣶⣶⣾⣿⡇⠀⣿⣿⣿⣿⡏⢀⠙⢿⣿⠀⢸⡇⠀⣷⣷⣆⠈⢿⣿⡇\n⢸⣿⣿⠀⢸⣿⣿⣿⣿⠀⢤⣤⣴⣿⣧⠀⢿⣿⣤⠀⣿⡇⠀⣤⣤⣼⣿⡇⠀⣷⣄⠙⠀⢸⡇⠀⣿⣿⡟⠀⣸⣿⡇\n⢸⣿⣿⣀⣈⣉⣉⣉⣿⣀⣈⣉⣉⣹⣿⣷⣄⣈⣁⣤⣿⣇⣀⣉⣉⣉⣿⣇⣀⣿⣿⣷⣄⣸⣧⣀⣉⣉⣀⣴⣿⣿⡇",
  "airLeap": "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⢀⠀⣀⣀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⢴⣰⢦⣄⣿⣶⣿⣿⣷⣔⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣐⣾⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⣴⣾⡭⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡔⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⡉⠶⡈⡉⢿⠷⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣺⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⡀⢂⠰⡀⢀⡙⢮⣝⣪⣂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⣿⣿⣄⢗⢂⠉⣠⣍⣩⡐⡌⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣾⣷⡟⢋⠄⠠⢀⡾⢛⣽⣿⣿⣿⣷⣶⠂⠐⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣟⣷⣿⠡⠈⠀⢤⠏⣼⣿⣿⣿⠟⠉⠛⠥⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣟⣿⣌⡆⠁⠉⠀⠬⡉⠭⠛⢛⡤⠀⠀⠈⠓⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣻⣿⣿⣿⣿⣿⣿⢿⣧⡄⡉⠻⣿⣇⢀⠀⡀⢀⠀⠀⡀⢥⢋⡱⢳⠠⢂⣤⣼⡣⠀⣀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠾⣿⣿⣿⣿⣿⡩⡤⣷⢋⣇⠀⠠⢿⡮⠇⡘⠤⢊⠔⣩⢖⠫⡜⠹⠘⠛⣛⡿⡀⠘⡄⠠⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡽⣿⣿⣿⣿⣿⢮⣢⠌⢤⡾⢑⢊⠱⠀⠂⠠⢈⠎⡵⣉⠎⣐⠃⣌⣞⣵⣶⡖⠀⡏⠐⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠽⣿⣿⣿⣿⣎⠻⣿⢿⡶⡉⢆⢂⠡⣈⠄⡡⠚⠤⡁⠎⠀⣢⢟⣯⣯⣻⡅⣦⣢⠄⣼⠀⠀⢀⠤⢄⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢝⣿⣿⣿⠧⢃⡐⠂⡄⢳⡜⣢⠑⣆⠸⢤⣉⠦⡑⡌⠲⣅⠻⣙⢛⣯⠀⣿⠀⠀⠨⣀⢔⠕⠁⣠⣕⡄⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢾⣿⣿⠉⡆⣀⠁⢰⢉⣱⣉⡾⣈⡿⣶⣏⣶⢱⡀⢇⡈⠷⣈⣶⣹⡆⢿⠁⠀⠀⡉⠀⠀⣾⣿⣿⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡸⢟⣋⠒⠤⢂⠡⠂⠼⡐⣼⣻⢿⣿⣿⣿⣾⣿⣿⣷⣯⣿⣿⣿⡿⠁⣿⠀⠀⢾⠁⠐⠀⢛⢉⣉⣩⡄⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡐⠀⠈⠲⣉⠔⡠⠁⠜⠰⣹⣿⣟⣮⡿⣝⡿⣋⣿⣿⣿⠿⠻⠛⠉⠀⠀⢛⡄⢀⢻⠀⠀⠀⡀⠀⠉⠛⡃⡀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠤⠀⠀⠀⠐⠂⠀⠒⠰⠀⠀⠀⠀⠘⢆⠡⠌⣀⢣⠹⣿⣞⡷⡙⢡⢒⣽⣿⣟⠁⠀⠀⠀⠀⠀⢸⣹⠁⠀⠄⠀⠀⠀⠀⠀⢀⠣⣿⠇\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⡐⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢄⠀⠀⠀⠀⠑⢄⣐⢪⠱⣋⢿⡅⢡⢃⢎⠹⣿⡆⠀⠀⠀⠀⠀⠀⠈⡜⡄⠀⠀⠀⠀⠀⠀⠀⠀⣸⠏⠀\n⠀⠀⠀⠀⠀⠀⠀⢀⠌⠀⠀⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠱⣌⢣⡝⣲⡜⢢⠭⣆⢳⡟⠄⠀⠀⠀⠀⠀⠀⠀⡇⠐⠀⠀⠀⠀⠀⠀⢀⣰⡓⠀⠀\n⠀⠀⠀⠀⠀⠀⢀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠂⠄⣀⠀⠀⠀⠈⠢⠀⠀⠀⠀⠈⠳⣞⡵⣫⢧⣻⣾⣿⢣⠃⠀⠀⠀⠀⠀⠀⢠⠰⢀⠀⠀⠀⠀⠀⣤⣿⡗⠁⠀⠀\n⠀⠀⠀⠀⠀⡠⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠂⠄⠀⠐⢄⠀⠀⠀⠀⠈⠻⣧⣿⣿⣿⡟⡧⠑⠀⡀⠀⠀⠀⢀⠂⡁⠀⠀⠀⠀⢀⣼⣟⠃⠀⠀⠀⠀\n⠀⠀⠀⠀⡐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠑⢄⠀⠀⠀⠀⠈⢻⣿⢏⡵⠁⠀⠲⡈⠂⢀⠀⡌⠠⠀⠀⠀⠀⠀⣼⡿⠌⠀⠀⠀⠀⠀\n⠀⠀⠀⢠⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠠⠀⠀⠀⠑⡙⣄⠀⠀⠀⢠⣠⣾⡇⠀⠠⠀⠈⠂⠀⢸⢀⠂⠄⠂⠀⠀⣰⡟⣷⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣰⠶⣶⢤⡄⠀⠐⠙⢷⣄⢴⠛⢻⡽⠃⠀⠀⠁⠀⠰⡀⣞⠠⠐⠠⠀⠀⢠⣿⢩⡇⠀⠀⠀⠀⠀⠀\n⠀⠀⠰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⢉⣿⣾⣏⣸⣶⡀⣎⠈⠎⢸⣇⠸⣾⠁⣰⢆⠀⠀⠀⢸⡏⠰⡈⠰⠀⢀⠸⣏⣾⠇⠀⠀⠀⠀⠀⠀\n⠀⠀⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠼⢫⡲⢹⡿⣻⢦⢻⣄⠀⡦⠈⢿⡄⡷⣻⡝⣿⣮⠀⢀⡞⠤⡑⠤⠀⠀⣂⢽⡇⣞⠀⠀⠀⠀⠀⠀⠀\n⠀⠰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢵⢈⠆⢕⣣⢎⣥⣿⠆⠀⠑⠀⢿⣸⠌⡙⠶⣹⠗⠉⠬⡑⣈⠐⠀⡁⢴⣺⢘⡏⠀⠀⠀⠀⠀⠀⠀\n⠀⠇⠀⠀⠠⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠛⠓⠈⠛⠉⠁⠀⠀⠀⠀⠘⢾⡳⢌⡴⢃⠀⠌⠐⡐⠀⠀⠐⣈⠦⡛⡼⠇⠀⠀⠀⠀⠀⠀⠀\n⠠⠀⠀⠀⠀⠀⠀⠀⠐⠒⠨⠤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⠮⠿⢦⣌⠀⠄⠀⠀⢀⠂⡔⣫⢵⢻⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠠⠤⢀⠀⠤⢀⣈⣒⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠈⠳⡀⠀⢀⠂⡜⣸⢱⣾⡄⠀⠀⠀⠀⠀⠀⠀⠀",
  "armsWide": "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣤⣤⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣾⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡏⠙⢣⡄⢀⣤⡴⠿⠛⠋⠉⠀⠀⠀⠀⠀⠀⠈⠉⠻⢷⡦⣤⡀⠀⣴⠿⢻⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣇⣠⣴⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⢧⡤⢼⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⣽⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠷⣄⠙⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢳⣦⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⠃⠀⠀⠀⠀⠀⠀⢀⣤⣴⣶⡲⠶⣦⣄⣀⡀⢀⣀⣴⣶⣶⣶⣤⣀⠀⠀⠀⠀⠀⠀⠙⢮⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠟⠁⠀⠀⠀⠀⠀⠀⣸⡟⠋⣽⣿⣿⣷⡄⠀⢹⠿⠻⡅⢀⣴⣿⣿⣯⠙⠻⣦⠀⠀⠀⠀⠀⠀⠳⡿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡿⠘⠁⠀⠀⠀⠀⠀⠀⢻⣾⣆⠙⣿⣿⡿⠃⢠⡾⠀⠀⠻⣌⠛⢿⣿⡟⠃⢠⠇⠀⠀⠀⠀⠀⠀⠀⠙⣼⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠿⠷⣶⣀⣠⣶⣿⣤⣤⣄⡀⠈⠳⢦⣤⣴⠶⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢎⢣⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⠿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⡿⠟⠉⠁⠀⠀⠉⠙⠷⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣀⣀⠀⠀⠀⠀⠀⠀⠀⣈⣻⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⢦⡀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⣠⡾⡋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⠿⢿⣿⣻⣶⣆⣀⣴⡶⠿⣿⠿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣄⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⢠⣾⠋⠠⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⠀⠈⢧⡀⠀⠀⠀\n⠀⠀⠀⠀⢰⣿⡿⠀⢰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠇⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⣏⣇⠀⠀⠀\n⠀⠀⠀⠀⢸⣿⡀⢰⡟⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢆⠀⠀⠀⠀⠠⠀⠀⠀⠀⠀⠀⠀⠀⣴⡏⢿⡀⠀⠀\n⠀⠀⠀⠀⢸⣿⣿⡟⠀⠀⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⠀⠀⠂⠀⠀⡀⠀⠀⠀⠀⠀⠀⡿⠀⢸⡇⠀⠀\n⠀⠀⠀⠀⣿⣿⣿⡇⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠁⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠈⡇⠀⠀\n⠀⠀⠀⢠⣿⣿⣿⣧⠀⠸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠒⠒⠒⠒⠶⠶⠦⠤⠤⠤⢤⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⡆⠀⢹⠀⠀\n⠀⠀⠀⢸⣿⣿⣿⠹⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡀⠀⠀⠀⠀⠀⣰⠏⢹⣇⠀⢸⡇⠀\n⠀⠀⢀⣾⣿⣿⡏⠀⢻⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⡇⠀⠀⠀⣀⣶⡿⠀⠀⢻⣇⠀⣧⠀\n⠀⠀⢸⣿⣿⣿⠀⠀⠀⠻⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⣤⣿⡿⠁⠀⠀⢸⣿⡆⢸⡄\n⠀⠀⣸⡟⢿⣿⠀⠀⠀⠀⠙⢷⣀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⢰⣠⣴⣶⣿⡿⠁⠀⠀⠀⠀⣿⡿⢞⡇\n⠀⠀⣿⠃⣿⣿⠀⠀⠀⠀⠀⠀⠻⢿⣧⣀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣴⣾⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⣿⡇⠈⡇\n⠀⠀⣿⢀⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣶⣄⠀⢀⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠌⠿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠇\n⠀⢀⣿⢈⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣷⣶⣭⣅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣴⣿⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡏⠀⠀⡀\n⠀⢸⡟⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡿⠈⣿⣿⡏⠛⠿⠶⣦⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⡶⠶⣿⣿⣿⣿⠿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢸⡇⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⢠⣿⣿⠇⠀⠀⠀⠀⠉⠉⠙⠛⠛⠶⠶⣶⡶⡶⢶⠞⠛⠛⠉⠉⠀⠀⠀⢹⢿⣿⠟⠈⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢸⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⢸⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⢰⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⣸⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⣸⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠃⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⠀⣸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⢰⣿⣏⠙⢷⣄⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣧⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠌⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⡆⢹⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠀⠀⠀⠀\n⢸⣿⣿⠁⣸⠻⣆⠀⠀⠀⠀⠀⠀⠀⠸⣿⣾⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣧⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⠁⠀⠀⠀⠀\n⣿⣿⣿⠀⢿⣷⣿⡄⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⢠⠟⠀⠀⠀⠀⠀⠀\n⣿⣿⣿⠀⠘⡿⢿⣿⣦⠀⠀⠀⠀⠀⠀⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡏⣿⡇⠀⠀⠀⠀⠀⠀⠀⢠⠟⣀⡴⣦⠀⠀⠀⢀\n⢸⣿⣿⣧⣼⣄⠈⣿⣿⡆⠀⠀⠀⠀⠀⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠁⣿⡇⠀⠀⠀⠀⠀⠀⠀⣿⣾⠋⠀⢸⠀⠀⠀⣾\n⠈⢻⣿⣿⣯⣿⣿⠿⣿⠇⠀⠀⠀⠀⠀⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠌⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⢐⣿⠃⠀⠀⠀⠀⠀⠀⣸⣿⠟⠀⢀⣇⣰⠟⣸⣿\n⠀⠀⠘⠻⣿⣷⣝⢻⡟⠀⠀⠀⠀⠀⠀⣿⡏⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠨⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⢸⣿⡄⠀⠀⠀⠀⠀⠀⠘⢁⣀⣘⣿⣿⡟⣰⣿⡟\n⠀⠀⠀⠀⠘⠛⠛⠛⠋⠀⠀⠀⠀⠀⢀⣿⣧⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⠇⠀⠀⠀⠀⠀⠰⣤⣬⣭⣬⣿⣿⡿⠛⠁⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡿⢿⡿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⡀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⠋⠙⣿⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡷⠨⣵⣜⢦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠢⠀⠀⠀⠀⠀⠀⢠⡾⠇⠀⠀⠈⠻⢶⣦⣄⣀⣤⣤⣤⣤⣄⣀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⠻⣿⣡⣤⠀⠈⣻⣷⣮⣟⣲⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠂⠠⣀⠀⠀⣿⣀⡀⠀⠀⠀⠀⠀⠀⠈⠻⣿⡛⠋⢨⣽⠻⣿⡦⣄⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡟⣹⣯⣿⣿⣿⡏⢹⣿⣿⣿⣿⣏⢹⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⠻⢶⣶⣖⡰⠇⢿⡄⢹⣷⣿⣝⠿⣄⢸⣿⡿⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣷⣿⣿⡿⠿⣿⣧⣼⣿⠿⢿⣿⣿⣶⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⠷⠿⠾⠻⠿⠿⠿⠛⠉⠁⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠁⠀⠀⠈⡉⠉⠁⠀⠀⢈⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⣀⠀⠀⠀⢀⣀⠀⠀⠀⠀⠀⠀⠀",
  "roarFace": "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣾⣾⣿⣶⣶⣷⣶⣦⣤⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠴⠠⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣶⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⣿⣶⣦⣀⠀⠀⠀⠀⠀⠠⠀⠈⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⣿⣿⣿⣷⣄⠀⠀⢰⠁⠀⠨⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣠⠀⠀⠀⠂⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⢿⢻⢛⠻⡟⢻⠩⢛⠻⠻⡿⣿⠿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⢟⡳⡍⢎⠣⢎⠱⢈⠄⠢⢁⠊⠡⢠⢁⠃⡐⠤⢉⢣⡘⠬⢩⢉⠟⡹⢿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⡂⠀⠀\n⠀⠀⠀⢀⣿⣿⣿⣿⣿⣏⢞⡰⣉⠎⠱⣈⠀⠆⠈⠑⠈⠈⠀⠂⠀⠐⠀⠐⡈⠠⣈⠰⢁⠆⡚⣥⢛⡼⣿⣿⣿⣿⣿⣿⣿⡆⠀⠄⠀⠀\n⠀⠀⠀⢸⣿⣿⣿⣿⣿⡼⣄⠣⢄⠸⠀⠀⠠⠀⠃⠀⠛⠀⠀⠀⠀⠀⠠⠀⠀⠃⠘⢣⠄⡘⢣⢄⣟⠻⣧⡿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀\n⠀⠀⠀⣿⣿⣿⣿⣿⡿⣜⡒⠭⣀⠆⡑⠈⠀⠐⠀⠂⠀⠀⠀⠉⠀⠀⠀⠈⠄⠠⠄⠀⢒⠘⡔⢪⣌⢳⣋⢿⣿⣿⣿⣿⣿⣿⡤⠀⠀⠀\n⠀⠀⢘⣿⣿⣿⣿⣿⣟⡰⢏⠲⣀⢂⠔⡈⡐⢀⠀⠀⠂⠁⡀⠐⠤⢀⠒⢨⠐⡐⢢⣌⠄⡣⢜⡱⢎⡱⣭⢞⣯⣿⣿⣿⣿⣿⡇⠀⠀⠀\n⠀⠀⢨⣿⣿⣿⣿⣿⠎⡜⣆⢣⢐⣂⣒⡠⠁⠂⠨⠐⠈⠄⠐⠡⠀⠀⠀⠄⠑⠈⡐⢠⢊⠑⡎⣵⣊⣷⣎⣯⢿⣿⣿⣿⣿⣿⣇⠀⠀⠀\n⠀⠀⠘⣿⣿⣿⡏⣦⢛⣵⣮⣾⣾⣿⣧⣵⣶⣤⣤⣠⠀⠀⠀⠀⠀⣀⠀⠈⠀⠀⠀⢀⣨⣴⣶⣩⣿⣿⣿⣿⣿⡽⣿⣿⣿⣿⣿⠀⠀⠀\n⠀⠀⠀⣿⣿⣿⡼⣧⣿⣿⣟⢟⠋⢙⠛⠿⣿⣿⣿⣿⣿⣶⡄⠀⠈⠁⠀⠀⢠⣤⣶⣿⣿⣿⣿⣿⣿⠿⢻⢿⣿⣿⣿⣻⣿⣿⣿⠀⠀⠀\n⠀⠀⠀⢸⣿⣿⣿⣹⣿⣟⢂⠂⣌⣥⣶⣤⣬⣯⣿⣿⣽⣾⣻⠂⠀⠀⠀⢀⣼⣿⣿⣿⣿⣋⣃⣄⣂⡙⣦⠒⣿⣿⣿⣿⣿⣿⣟⠀⠀⠀\n⢠⣶⣶⣿⣿⣿⣷⣿⡟⣭⢂⠱⣿⡿⠛⣿⣿⣿⠉⣳⣯⣹⣷⠀⡀⠀⢠⣿⣾⣿⢩⡷⠛⣿⣿⣿⠿⣿⣶⣿⢺⣿⣿⣿⣿⣿⣿⣷⣦⠀\n⣿⣸⠛⢯⣻⣿⣿⣿⠱⡈⠄⠈⠛⠛⠿⡿⠧⠛⠉⢉⡀⠀⠩⠐⡁⠀⢸⣿⡟⣯⢙⡉⠉⠉⠛⠛⣶⠿⠿⠏⢣⢛⠻⣿⣿⣿⣿⢿⣻⠆\n⢿⣽⠈⠙⣿⣿⣿⣗⢣⡙⣐⠀⠀⠀⠀⠀⠀⠀⢀⠂⠀⠀⠡⣾⢇⠠⢸⣿⣧⠁⠋⠳⠆⠀⠄⠠⠄⡠⢀⠂⢍⠢⢱⣿⣿⡿⠋⢿⣽⠀\n⠘⣇⠀⠀⡿⢿⣿⣯⡗⠬⡄⢀⠂⠀⠀⠀⠀⡀⠀⢀⠀⢂⣰⣏⣼⢀⢺⡿⣿⣶⣤⡀⢉⠀⠀⡐⠄⢈⠦⣉⠦⣹⣾⣿⣿⣷⡀⢸⡇⠀\n⠀⠹⣴⠦⣇⢹⣿⣿⡭⢳⠄⡃⢌⠀⠀⠃⠀⠀⠀⠀⢀⣴⡟⠡⢠⢀⠂⠯⡽⣿⣦⣉⠈⠐⢂⡀⠀⠀⠎⣷⣬⡽⣿⣿⣿⣟⡿⣿⠁⠀\n⠀⠀⢻⣀⠈⣿⣿⣿⣧⠓⡜⣀⠂⠈⠀⠠⠄⠀⠀⠀⣿⠙⣠⡰⠉⠀⠈⠱⣌⢣⠛⣿⢆⠀⠀⠀⠠⢈⠐⢢⠽⣿⣿⣿⣿⡿⢦⡇⠀⠀\n⠀⠀⠀⠻⣞⣋⣿⣿⣷⣹⡔⡩⠐⣀⡀⠀⠀⠀⠀⠀⠉⠛⠋⡙⠳⠦⡶⠾⢛⢹⢛⡋⡤⢈⠷⠂⠀⢂⠜⡤⣛⣿⣿⣿⣿⣯⠟⠀⠀⠀\n⠀⠀⠀⠀⠀⠉⢹⣿⣯⢹⣷⣇⠳⡠⠌⠀⠀⠂⣤⡀⠄⠈⡑⢌⠁⠀⠀⠑⢼⠉⠆⣵⣶⣯⣖⠱⣘⡐⢮⣱⣿⣿⣿⣿⠉⠁⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⣿⣯⡙⣿⢻⣗⡡⢂⡉⠤⡰⢄⠉⣀⣄⣈⣀⣅⣒⠂⣀⣀⣜⣄⣦⣴⣹⣿⣱⡽⢧⢎⣷⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⣿⣧⡍⣿⠘⣿⢰⠁⡌⣦⣵⣾⣿⡟⠙⠋⠋⠉⠙⠛⠉⡏⠉⡏⢹⡟⢻⣿⠛⢡⡟⢸⣷⣿⢳⣿⡏⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⢹⣷⡙⣌⢓⣻⣧⢊⠀⠀⠉⠻⣤⣅⣀⠀⠀⠀⠈⠀⠀⡃⢀⣀⣿⣷⡿⠁⣠⠞⢀⣿⣿⢯⣻⣿⡇⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠈⢿⣱⢹⢢⠘⣿⣦⠁⠀⠀⠀⠈⢛⢻⠻⠿⠷⢞⡛⡛⣿⣿⢟⣻⠋⡄⣴⠋⢀⣾⣿⡏⢷⣿⡿⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣣⠚⡇⡌⣿⣷⠀⠀⠁⠠⣀⠀⠓⠦⠤⢤⢤⣴⠿⢋⡴⡃⠼⠠⠇⢠⣾⣿⢏⡼⢿⣿⠃⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣧⡇⣴⠈⠿⣿⡄⠀⠀⠈⠁⠀⠀⠀⠂⠈⠃⠄⠋⠀⠑⡈⣅⢢⣿⡿⣓⣾⣽⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⢧⣛⠰⢿⡷⡔⢁⡀⠀⡀⢀⠀⠉⠀⣉⢤⠽⡜⣄⡧⣿⣿⣿⣳⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠿⣯⡷⣏⣄⢹⠀⣀⠀⠀⠀⡀⠎⠱⠢⡇⣯⣿⣿⣿⣿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⢾⣾⣙⡈⡉⢄⡶⠶⠤⣀⣴⣮⣿⣿⠿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠉⠙⠓⠿⠷⠶⠷⠾⠿⠟⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "siuuuBanner": "⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⡄\n⢽⣿⣿⠛⢻⣿⣿⣿⣿⠛⠛⠛⠛⢻⣿⣿⠿⠛⠛⠿⣿⡟⠛⠛⠛⠛⣿⡟⢿⣿⣿⣿⠛⢻⡟⠛⠛⠛⠻⣿⣿⣿⡇\n⢸⣿⣿⠀⢸⣿⣿⣿⣿⠀⢿⣿⣿⣿⡿⠁⣴⣶⣶⣾⣿⡇⠀⣿⣿⣿⣿⡏⢀⠙⢿⣿⠀⢸⡇⠀⣷⣷⣆⠈⢿⣿⡇\n⢸⣿⣿⠀⢸⣿⣿⣿⣿⠀⢤⣤⣴⣿⣧⠀⢿⣿⣤⠀⣿⡇⠀⣤⣤⣼⣿⡇⠀⣷⣄⠙⠀⢸⡇⠀⣿⣿⡟⠀⣸⣿⡇\n⢸⣿⣿⣀⣈⣉⣉⣉⣿⣀⣈⣉⣉⣹⣿⣷⣄⣈⣁⣤⣿⣇⣀⣉⣉⣉⣿⣇⣀⣿⣿⣷⣄⣸⣧⣀⣉⣉⣀⣴⣿⣿⡇"
};

const PRESETS = [
  {
    id: "giant",
    mode: "suii_power",
    label: "🔥 #1 GIANT SIUUUUU! (#7)",
    title: "💥 CRISTIANO RONALDO #7 — LIVE ANIMATED GIANT FULL-BODY SIUUUUU!",
    art: ARTS.giantA,
    altArt: ARTS.giantB,
  },
  {
    id: "portrait",
    mode: "portrait_flash",
    label: "👑 #2 CR7 PORTRAIT + SIUUUU",
    title: "👑 CRISTIANO RONALDO — LIVE ANIMATED PORTRAIT + SIUUUU STADIUM WAVE",
    art: ARTS.portraitSiuuu,
  },
  {
    id: "leap",
    mode: "air_leap",
    label: "⚡ #3 MID-AIR LEAP",
    title: "⚡ CRISTIANO RONALDO — LIVE 2.93M AIRBORNE LEVITATING LEAP",
    art: ARTS.airLeap,
  },
  {
    id: "roar",
    mode: "sonic_roar",
    label: "🦁 #4 ROARING CR7",
    title: "🦁 CRISTIANO RONALDO — LIVE SONIC BOOM ROAR CLOSE-UP",
    art: ARTS.roarFace,
  },
  {
    id: "compact",
    mode: "compact_bounce",
    label: "⚽ #5 COMPACT SIUUU",
    title: "⚽ CRISTIANO RONALDO #7 — LIVE ANIMATED COMPACT SIUUUUU!",
    art: ARTS.compactSiuuu + "\n\n" + ARTS.siuuuBanner,
  },
];

// Multi-frame cinematic intro sequence before locking into continuous live picture animation
const ANIM_SEQUENCE = [
  {
    ms: 480,
    scale: 0.93,
    yOffset: -18,
    shock: false,
    mode: "air_leap",
    status: "🛸 ALIEN TELEMETRY: CR7 2.93M AIRBORNE LEAP DETECTED...",
    art: ARTS.airLeap,
  },
  {
    ms: 360,
    scale: 0.91,
    yOffset: -10,
    shock: false,
    mode: "compact_bounce",
    status: "⚡ 180° MID-AIR ROTATION: LOCKING ON BACK JERSEY #7...",
    art: ARTS.compactSiuuu,
  },
  {
    ms: 400,
    scale: 0.97,
    yOffset: -4,
    shock: false,
    mode: "suii_power",
    status: "🔥 DESCENDING AT 4.7G — PREPARING POWER LANDING...",
    art: ARTS.midSiuuu,
  },
  {
    ms: 320,
    scale: 1.04,
    yOffset: 4,
    shock: true,
    mode: "suii_power",
    status: "💥 S I U U U U U U U U U U ! ! ! [STADIUM SHOCKWAVE IMPACT]",
    art: ARTS.giantA,
  },
  {
    ms: 280,
    scale: 1.0,
    yOffset: 0,
    shock: true,
    mode: "suii_power",
    status: "💥 S I U U U U U U U U U U ! ! ! [BIOLUMINESCENT AURA SURGE]",
    art: ARTS.giantB,
  },
  {
    ms: 320,
    scale: 1.02,
    yOffset: 0,
    shock: false,
    mode: "suii_power",
    status: "🛸 CRISTIANO RONALDO #7 — LIVE ANIMATED BRAILLE HOLOGRAM ACTIVE",
    art: ARTS.giantA,
  },
];

// Pre-analyze an ASCII picture into a 2D cell metadata grid so we can animate Braille particles,
// aura flames, wind streaks, sonic waves, and shimmer on Ronaldo's body without shifting alignment!
const parsedCache = new Map();

function parseAsciiPicture(rawText) {
  if (parsedCache.has(rawText)) return parsedCache.get(rawText);
  const lines = rawText.split("\n");
  const rows = lines.map((line) => Array.from(line));
  const H = rows.length;
  const W = Math.max(...rows.map((r) => r.length), 1);

  // Determine which cells are Ronaldo's body vs empty Braille space (U+2800 or regular space)
  const isBody = rows.map((row) =>
    row.map((ch) => {
      const code = ch.codePointAt(0);
      if (code === 0x2800 || code === 0x20) return false;
      return true;
    })
  );

  // Compute horizontal bounds of the figure per row (leftEdge, rightEdge)
  const rowBounds = rows.map((row, r) => {
    let minC = Infinity;
    let maxC = -1;
    for (let c = 0; c < row.length; c++) {
      if (isBody[r][c]) {
        if (c < minC) minC = c;
        if (c > maxC) maxC = c;
      }
    }
    return { minC, maxC, hasBody: maxC >= minC };
  });

  const parsed = { lines, rows, H, W, isBody, rowBounds };
  parsedCache.set(rawText, parsed);
  return parsed;
}

const AURA_SPARKS = ["⠁", "⠂", "⠄", "⠈", "⠐", "⠠", "⠋", "⠍", "✦", "⚡"];
const WIND_STREAKS = ["⠇", "⠃", "⠁", "┃", "┆", "⠀"];
const FLASH_SPARKS = ["✦", "✧", "★", "✸", "⚡"];
const SONIC_LEFT = ["(", "((", "⠇", "⠏", "✦"];
const SONIC_RIGHT = [")", "))", "⠸", "⠹", "✦"];

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Render a single animated frame of a Braille picture at tick t
export function renderAnimatedAsciiFrame(rawText, mode, tick, altRawText = null) {
  // Subtle pose breathing between giantA and giantB every 6 ticks if altRawText is provided
  const activeText = altRawText && Math.floor(tick / 5) % 2 === 1 ? altRawText : rawText;
  const { rows, H, isBody, rowBounds } = parseAsciiPicture(activeText);

  // Energy scan wave moving upward from boots to head
  const waveRow = H - 1 - (tick % (H + 8));
  const secondWaveRow = H - 1 - ((tick + Math.floor(H / 2)) % (H + 8));

  const htmlRows = [];

  for (let r = 0; r < H; r++) {
    const row = rows[r];
    const len = row.length;
    const bounds = rowBounds[r];
    const isBannerRow = r >= H - 5 && (mode === "suii_power" || mode === "portrait_flash" || mode === "compact_bounce");
    const isJerseyZone = mode === "suii_power" && r >= Math.floor(H * 0.28) && r <= Math.floor(H * 0.56);

    const outChars = new Array(len);

    for (let c = 0; c < len; c++) {
      const ch = row[c];
      const code = ch.codePointAt(0);

      if (isBody[r][c]) {
        // Inside Ronaldo's figure or SIUUUU banner:
        // Create a living Braille shimmer wave across the dots without breaking the silhouette!
        if (code >= 0x2801 && code <= 0x28ff) {
          const waveHit = (r + c - tick * 2) % 19 === 0;
          if (waveHit && code !== 0x28ff) {
            // Add subtle extra Braille dot sparkle along the energy wave crest
            const sparked = 0x2800 | ((code - 0x2800) | 0x81);
            outChars[c] = String.fromCodePoint(sparked);
          } else {
            outChars[c] = ch;
          }
        } else {
          outChars[c] = ch;
        }
      } else if (code === 0x2800) {
        // Empty Braille cell in the background: animate aura sparks, wind, shockwaves & sonic booms!
        const distLeft = bounds.hasBody ? bounds.minC - c : 999;
        const distRight = bounds.hasBody ? c - bounds.maxC : 999;
        const minEdgeDist = Math.min(
          distLeft > 0 ? distLeft : 999,
          distRight > 0 ? distRight : 999
        );

        let replacement = ch;

        // 1. Bioluminescent Aura Flames hugging Ronaldo's silhouette (1..3 cells from his body)
        if (minEdgeDist >= 1 && minEdgeDist <= 3) {
          const hash = (r * 13 + c * 7 + tick * 3) % 23;
          if (hash === 0) {
            replacement = AURA_SPARKS[(r + tick) % AURA_SPARKS.length];
          } else if (hash === 1 && minEdgeDist === 1) {
            replacement = "⠁";
          }
        } else if (mode === "air_leap") {
          // 2. High-velocity downward wind streaks & jump trail for Mid-Air Leap
          const windHash = (c * 19 - r + tick * 2) % 31;
          if (windHash === 0 && minEdgeDist > 3) {
            replacement = WIND_STREAKS[(r + tick) % WIND_STREAKS.length];
          }
        } else if (mode === "portrait_flash" || mode === "arms_wide") {
          // 3. Stadium camera flashbulbs & expanding radial arcs
          const flashHash = (r * 17 + c * 29 + tick) % 67;
          if (flashHash === 0 && ((r + c + tick) % 4 === 0)) {
            replacement = FLASH_SPARKS[(r + c + tick) % FLASH_SPARKS.length];
          } else if (mode === "arms_wide" && minEdgeDist >= 4 && minEdgeDist <= 14) {
            const ringWave = (minEdgeDist - (tick % 12) + 12) % 12;
            if (ringWave === 0 && r % 2 === 0) {
              replacement = distLeft > 0 && distLeft < 999 ? "⠇" : "⠸";
            }
          }
        } else if (mode === "sonic_roar") {
          // 4. Sonic boom roar waves blasting outward from CR7's roaring mouth
          const mouthZone = r >= Math.floor(H * 0.45) && r <= Math.floor(H * 0.78);
          if (mouthZone && minEdgeDist >= 3 && minEdgeDist <= 18) {
            const sonicPhase = (minEdgeDist - (tick * 2) % 14 + 14) % 14;
            if (sonicPhase === 0) {
              replacement = distLeft > 0 && distLeft < 999
                ? SONIC_LEFT[r % SONIC_LEFT.length][0]
                : SONIC_RIGHT[r % SONIC_RIGHT.length][0];
            }
          }
        } else if (mode === "suii_power" || mode === "compact_bounce") {
          // 5. Ground shockwave ripples near the boots + rising stadium plasma
          const isBootZone = r >= H - 9 && r < H - 5;
          if (isBootZone && minEdgeDist >= 2 && minEdgeDist <= 18) {
            const shockPhase = (minEdgeDist - (tick * 2) % 14 + 14) % 14;
            if (shockPhase === 0) {
              replacement = "⠶";
            } else if (shockPhase === 1) {
              replacement = "⠤";
            }
          } else {
            const plasmaHash = (c * 23 + r * 7 + tick * 2) % 53;
            if (plasmaHash === 0 && (r + tick) % 3 === 0) {
              replacement = AURA_SPARKS[(c + tick) % 6];
            }
          }
        }

        outChars[c] = replacement;
      } else {
        outChars[c] = ch;
      }
    }

    // Per-row dynamic CSS class & subtle horizontal kinetic wave
    let rowClass = "suii-row";
    let shiftX = 0;

    if (isBannerRow) {
      const bannerWave = (r + tick) % 4;
      rowClass += bannerWave === 0 ? " is-banner-flash" : " is-banner-glow";
      shiftX = Math.sin(tick * 0.45 + r * 0.9) * 2.2;
    } else if (Math.abs(r - waveRow) <= 1 || Math.abs(r - secondWaveRow) <= 1) {
      rowClass += Math.abs(r - waveRow) === 0 ? " is-wave-crest" : " is-wave-sub";
      shiftX = Math.sin(tick * 0.3 + r * 0.4) * 1.2;
    } else if (isJerseyZone && (tick % 8 < 4)) {
      rowClass += " is-jersey-gold";
    }

    if (mode === "sonic_roar" && r >= Math.floor(H * 0.45) && r <= Math.floor(H * 0.75)) {
      shiftX += (tick % 2 === 0 ? 1.4 : -1.4);
    }

    const styleAttr = shiftX !== 0 ? ` style="transform:translateX(${shiftX.toFixed(1)}px)"` : "";
    htmlRows.push(`<span class="${rowClass}"${styleAttr}>${escapeHtml(outChars.join(""))}</span>`);
  }

  return htmlRows.join("");
}

// Compute whole-figure posture motion (levitation, breathing, bounce) per tick
function getPostureTransform(mode, tick, baseScale = 1) {
  if (mode === "air_leap") {
    const floatY = Math.sin(tick * 0.28) * 7;
    const tilt = Math.cos(tick * 0.18) * 0.8;
    return `translateY(${floatY.toFixed(1)}px) rotate(${tilt.toFixed(2)}deg) scale(${baseScale})`;
  }
  if (mode === "compact_bounce") {
    const bounceY = -Math.abs(Math.sin(tick * 0.35)) * 6;
    return `translateY(${bounceY.toFixed(1)}px) scale(${baseScale})`;
  }
  if (mode === "sonic_roar") {
    const pulseScale = baseScale + Math.sin(tick * 0.5) * 0.018;
    return `scale(${pulseScale.toFixed(3)})`;
  }
  // Default power breathing stance
  const breathScale = baseScale + Math.sin(tick * 0.24) * 0.012;
  const breathY = Math.cos(tick * 0.24) * 2.2;
  return `translateY(${breathY.toFixed(1)}px) scale(${breathScale.toFixed(3)})`;
}

export function playRealisticSuiiAudio() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;

    // 1. Rising leap whoosh (0.0s -> 1.2s)
    const sweep = ctx.createOscillator();
    const sweepGain = ctx.createGain();
    sweep.type = "sawtooth";
    sweep.frequency.setValueAtTime(160, now);
    sweep.frequency.exponentialRampToValueAtTime(640, now + 0.95);
    sweep.frequency.exponentialRampToValueAtTime(220, now + 1.3);
    sweepGain.gain.setValueAtTime(0.001, now);
    sweepGain.gain.linearRampToValueAtTime(0.09, now + 0.45);
    sweepGain.gain.exponentialRampToValueAtTime(0.001, now + 1.32);
    sweep.connect(sweepGain).connect(ctx.destination);
    sweep.start(now);
    sweep.stop(now + 1.35);

    // 2. Landing Sub-Bass Impact + "S I U U U U U !" Formant Chord at t = 1.3s
    const impactT = now + 1.3;
    const sub = ctx.createOscillator();
    const subGain = ctx.createGain();
    sub.type = "sine";
    sub.frequency.setValueAtTime(140, impactT);
    sub.frequency.exponentialRampToValueAtTime(34, impactT + 1.35);
    subGain.gain.setValueAtTime(0.001, impactT);
    subGain.gain.linearRampToValueAtTime(0.38, impactT + 0.04);
    subGain.gain.exponentialRampToValueAtTime(0.001, impactT + 1.5);
    sub.connect(subGain).connect(ctx.destination);
    sub.start(impactT);
    sub.stop(impactT + 1.55);

    [130.81, 196.0, 261.63].forEach((freq, idx) => {
      const vox = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const voxGain = ctx.createGain();
      vox.type = idx === 0 ? "sawtooth" : "triangle";
      vox.frequency.setValueAtTime(freq * 1.28, impactT);
      vox.frequency.exponentialRampToValueAtTime(freq, impactT + 0.25);
      vox.frequency.linearRampToValueAtTime(freq * 0.94, impactT + 1.8);

      filter.type = "bandpass";
      filter.frequency.setValueAtTime(950, impactT);
      filter.frequency.exponentialRampToValueAtTime(360, impactT + 0.3);
      filter.Q.value = 3.5;

      voxGain.gain.setValueAtTime(0.001, impactT);
      voxGain.gain.linearRampToValueAtTime(0.12 / (idx + 1), impactT + 0.06);
      voxGain.gain.exponentialRampToValueAtTime(0.001, impactT + 1.9);

      vox.connect(filter).connect(voxGain).connect(ctx.destination);
      vox.start(impactT);
      vox.stop(impactT + 1.95);
    });
  } catch {}
}

// Mount inline interactive emojicombos.com CR7 ASCII player inside /site/ CR7-SIUUU-ASCII tab
export function mountInlineCR7Suii(host) {
  const card = document.createElement("div");
  card.className = "suii-inline-card";
  card.innerHTML = `
    <div class="suii-inline-bar">
      <div style="display:flex;flex-wrap:wrap;gap:5px;">
        <button type="button" data-mode="anim" class="is-active">🎬 PLAY SIUUU SEQUENCE</button>
        ${PRESETS.map((p, i) => `<button type="button" data-preset="${i}">${p.label}</button>`).join("")}
      </div>
      <div style="display:flex;gap:5px;">
        <button type="button" data-copy="1">📋 COPY ASCII</button>
        <button type="button" data-theater="1">⛶ FULL-SCREEN</button>
      </div>
    </div>
    <pre class="suii-inline-pre"></pre>
  `;
  host.appendChild(card);

  const pre = card.querySelector(".suii-inline-pre");
  let token = 0;
  let liveTimer = null;
  let currentRawArt = PRESETS[0].art;

  function stopLiveLoop() {
    if (liveTimer) {
      clearInterval(liveTimer);
      liveTimer = null;
    }
  }

  function startLivePresetLoop(preset) {
    stopLiveLoop();
    currentRawArt = preset.art;
    let tick = 0;
    const renderTick = () => {
      if (!card.isConnected) {
        stopLiveLoop();
        return;
      }
      pre.innerHTML = renderAnimatedAsciiFrame(preset.art, preset.mode, tick, preset.altArt);
      pre.style.transform = getPostureTransform(preset.mode, tick, 1);
      tick++;
    };
    renderTick();
    liveTimer = setInterval(renderTick, 95);
  }

  async function playInlineAnim(sound = false) {
    const myToken = ++token;
    stopLiveLoop();
    if (sound) playRealisticSuiiAudio();
    let tick = 0;
    for (const frame of ANIM_SEQUENCE) {
      if (myToken !== token || !card.isConnected) return;
      currentRawArt = frame.art;
      const steps = Math.max(1, Math.round(frame.ms / 90));
      for (let s = 0; s < steps; s++) {
        if (myToken !== token || !card.isConnected) return;
        pre.innerHTML = renderAnimatedAsciiFrame(frame.art, frame.mode, tick++);
        pre.style.transform = `translateY(${frame.yOffset || 0}px) scale(${frame.scale || 1})`;
        await new Promise((r) => setTimeout(r, 90));
      }
    }
    if (myToken === token && card.isConnected) {
      startLivePresetLoop(PRESETS[0]);
    }
  }

  const setActiveBtn = (btn) => {
    card.querySelectorAll(".suii-inline-bar button[data-mode], .suii-inline-bar button[data-preset]").forEach((b) => b.classList.remove("is-active"));
    btn?.classList.add("is-active");
  };

  card.querySelector('[data-mode="anim"]').addEventListener("click", (e) => {
    e.stopPropagation();
    e.currentTarget.blur();
    setActiveBtn(e.currentTarget);
    playInlineAnim(true);
  });

  card.querySelectorAll("button[data-preset]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.currentTarget.blur();
      token++;
      setActiveBtn(e.currentTarget);
      const p = PRESETS[Number(btn.dataset.preset)] || PRESETS[0];
      startLivePresetLoop(p);
    });
  });

  card.querySelector('[data-copy="1"]').addEventListener("click", (e) => {
    e.stopPropagation();
    const btn = e.currentTarget;
    btn.blur();
    navigator.clipboard?.writeText(currentRawArt);
    const old = btn.textContent;
    btn.textContent = "✓ COPIED!";
    setTimeout(() => (btn.textContent = old), 1400);
  });

  card.querySelector('[data-theater="1"]').addEventListener("click", (e) => {
    e.stopPropagation();
    e.currentTarget.blur();
    window.triggerCR7Suii?.();
  });

  playInlineAnim(false);
  return () => {
    token++;
    stopLiveLoop();
  };
}

export function initAlienSuii() {
  document.body.classList.add("alien-atmosphere");

  const hud = document.createElement("div");
  hud.className = "alien-hud-bar";
  hud.innerHTML = `
    <span class="alien-hud-status">🛸 ALIEN // ANZAR.DEV</span>
    <button type="button" class="alien-hud-btn" id="trigger-suii-btn" title="Launch Cristiano Ronaldo SIUUUUU! ASCII Art (Shortcut: S)">⚽ CR7 SIUUUUU! ASCII [S]</button>
  `;
  document.body.appendChild(hud);

  const holo = document.createElement("aside");
  holo.className = "suii-holo is-hidden";
  holo.setAttribute("aria-label", "Cristiano Ronaldo CR7 ASCII Art Stage");
  holo.innerHTML = `
    <div class="suii-holo-head">
      <div class="suii-holo-title">
        <span>🛸 CRISTIANO RONALDO #7 — LIVE ANIMATED S I U U U U U U U ! STAGE</span>
      </div>
      <div class="suii-holo-controls">
        <button type="button" id="suii-replay-btn">🎬 PLAY JUMP + SIUUUUU!</button>
        <button type="button" id="suii-livefx-btn" class="is-active">⚡ LIVE FX: ON</button>
        <button type="button" id="suii-copy-btn">📋 COPY ASCII</button>
        <button type="button" id="suii-close-btn">✕ CLOSE [ESC]</button>
      </div>
    </div>
    <div class="suii-tabs" id="suii-tabs">
      ${PRESETS.map((p, i) => `<button type="button" data-idx="${i}" class="${i === 0 ? "is-active" : ""}">${p.label}</button>`).join("")}
    </div>
    <div class="suii-stage-wrap">
      <pre class="suii-braille-pre" id="suii-braille-pre"></pre>
    </div>
    <div class="suii-holo-foot">
      <span id="suii-status">💥 CRISTIANO RONALDO #7 — LIVE ANIMATED FULL-BODY SIUUUUU!</span>
      <span>[S] REPLAY JUMP · [1-5] LIVE ANIMATED PICTURES · [ENTER] OPEN PROJECTS · [ESC] CLOSE</span>
    </div>
  `;
  document.body.appendChild(holo);

  const pre = holo.querySelector("#suii-braille-pre");
  const status = holo.querySelector("#suii-status");
  const liveFxBtn = holo.querySelector("#suii-livefx-btn");
  const tabBtns = [...holo.querySelectorAll("#suii-tabs button")];
  let animToken = 0;
  let liveInterval = null;
  let liveFxEnabled = true;
  let activePresetIdx = 0;
  let currentRawArt = PRESETS[0].art;

  function stopHoloLiveLoop() {
    if (liveInterval) {
      clearInterval(liveInterval);
      liveInterval = null;
    }
  }

  function highlightTab(idx) {
    tabBtns.forEach((b, i) => b.classList.toggle("is-active", i === idx));
  }

  function startHoloLivePreset(idx, withEntranceBounce = true) {
    stopHoloLiveLoop();
    activePresetIdx = idx;
    const p = PRESETS[idx] || PRESETS[0];
    currentRawArt = p.art;
    highlightTab(idx);
    status.textContent = p.title;

    if (!liveFxEnabled) {
      pre.textContent = p.art;
      pre.style.transform = "scale(1)";
      return;
    }

    let tick = 0;
    if (withEntranceBounce) {
      holo.classList.add("is-shockwave");
      setTimeout(() => holo.classList.remove("is-shockwave"), 380);
    }

    const step = () => {
      if (holo.classList.contains("is-hidden")) {
        stopHoloLiveLoop();
        return;
      }
      pre.innerHTML = renderAnimatedAsciiFrame(p.art, p.mode, tick, p.altArt);
      pre.style.transform = getPostureTransform(p.mode, tick, 1);
      tick++;
    };
    step();
    liveInterval = setInterval(step, 85);
  }

  function showPreset(idx) {
    animToken++;
    holo.classList.remove("is-hidden", "is-shockwave");
    startHoloLivePreset(idx, true);
  }

  async function runSuiiAnimation({ sound = false } = {}) {
    const myToken = ++animToken;
    stopHoloLiveLoop();
    holo.classList.remove("is-hidden");
    highlightTab(0);
    if (sound) playRealisticSuiiAudio();

    let tick = 0;
    for (const frame of ANIM_SEQUENCE) {
      if (myToken !== animToken) return;
      currentRawArt = frame.art;
      status.textContent = frame.status;
      holo.classList.toggle("is-shockwave", Boolean(frame.shock));

      const subSteps = Math.max(1, Math.round(frame.ms / 80));
      for (let s = 0; s < subSteps; s++) {
        if (myToken !== animToken) return;
        if (liveFxEnabled) {
          pre.innerHTML = renderAnimatedAsciiFrame(frame.art, frame.mode, tick++);
        } else {
          pre.textContent = frame.art;
        }
        pre.style.transform = `translateY(${frame.yOffset || 0}px) scale(${frame.scale || 1})`;
        await new Promise((r) => setTimeout(r, 80));
      }
    }

    if (myToken === animToken) {
      holo.classList.remove("is-shockwave");
      startHoloLivePreset(0, false);
    }
  }

  function closeHolo() {
    animToken++;
    stopHoloLiveLoop();
    holo.classList.add("is-hidden");
    holo.classList.remove("is-shockwave");
  }

  // Prevent pointer events inside holo from moving the background eye
  holo.addEventListener("pointermove", (e) => e.stopPropagation());
  holo.addEventListener("pointerdown", (e) => e.stopPropagation());

  hud.querySelector("#trigger-suii-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    e.currentTarget.blur();
    runSuiiAnimation({ sound: true });
  });

  holo.querySelector("#suii-replay-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    e.currentTarget.blur();
    runSuiiAnimation({ sound: true });
  });

  liveFxBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    e.currentTarget.blur();
    liveFxEnabled = !liveFxEnabled;
    liveFxBtn.classList.toggle("is-active", liveFxEnabled);
    liveFxBtn.textContent = liveFxEnabled ? "⚡ LIVE FX: ON" : "⚡ LIVE FX: OFF";
    startHoloLivePreset(activePresetIdx, false);
  });

  holo.querySelector("#suii-copy-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    const btn = e.currentTarget;
    btn.blur();
    navigator.clipboard?.writeText(currentRawArt);
    const prev = btn.textContent;
    btn.textContent = "✓ COPIED!";
    setTimeout(() => (btn.textContent = prev), 1400);
  });

  holo.querySelector("#suii-close-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    e.currentTarget.blur();
    closeHolo();
  });

  tabBtns.forEach((btn, idx) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.currentTarget.blur();
      showPreset(idx);
    });
  });

  window.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const tag = document.activeElement?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

    if (e.key === "s" || e.key === "S") {
      e.preventDefault();
      runSuiiAnimation({ sound: true });
    } else if (!holo.classList.contains("is-hidden")) {
      if (e.key === "Escape") {
        closeHolo();
      } else if (e.key >= "1" && e.key <= "5") {
        e.preventDefault();
        showPreset(Number(e.key) - 1);
      } else if (e.key === "Enter") {
        closeHolo();
        const enterLink = document.querySelector(".enter");
        if (enterLink) enterLink.click();
      }
    }
  });

  window.triggerCR7Suii = () => runSuiiAnimation({ sound: true });
  window.mountInlineCR7Suii = mountInlineCR7Suii;
}

initAlienSuii();
