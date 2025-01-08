from moduals.ninjas import Ninja
from moduals.cats import Cat
from moduals.dogs import Dog


ninja1 = Ninja("kiba", "dfghjk", "dfghjk", "hfjhiuh", Cat("garfieald", "lasagniya eating"))
ninja2 = Ninja("kiba", "dfghjk", "dfghjk", "hfjhiuh", Dog("garfieald", "lasagniya eating"))


ninja1.print_info()


ninja1.feed().walk().bathe()


ninja1.print_info()

ninja2.print_info()