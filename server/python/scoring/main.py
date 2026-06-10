class scoring :
    def __init__(self, model):
        self.model = model
    
    async def Jaccard(self, set1, set2):
        intersection = len(set(set1).intersection(set(set2)))
        union = len(set(set1).union(set(set2)))
        if union == 0:
            return 0.0
        return intersection / union

    async def CosineSimilarity(self, vec1, vec2):
        dot_product = sum(a * b for a, b in zip(vec1, vec2))
        magnitude_vec1 = sum(a ** 2 for a in vec1) ** 0.5
        magnitude_vec2 = sum(b ** 2 for b in vec2) ** 0.5
        if magnitude_vec1 == 0 or magnitude_vec2 == 0:
            return 0.0
        return dot_product / (magnitude_vec1 * magnitude_vec2)

    async def OverlapRatio(self, set1, set2):
        intersection = len(set(set1).intersection(set(set2)))
        smaller_set_size = min(len(set(set1)), len(set(set2)))
        if smaller_set_size == 0:
            return 0.0
        return intersection / smaller_set_size

    async def NormalisedDistance(self, year1:int, year2:int):
        gap = abs(year1- year2 )
        return 1/(1+gap)



